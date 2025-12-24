package net.swordie.ms.client.character.quest;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.quest.progress.QuestProgressMobRequirement;
import net.swordie.ms.client.character.quest.requirement.QuestStartCompletionRequirement;
import net.swordie.ms.client.character.quest.requirement.QuestStartRequirement;
import net.swordie.ms.client.character.quest.reward.QuestBuffItemReward;
import net.swordie.ms.client.character.quest.reward.QuestItemReward;
import net.swordie.ms.client.character.quest.reward.QuestReward;
import net.swordie.ms.client.surprisemission.SurpriseMissionModule;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.MobSetType;
import net.swordie.ms.enums.QuestStatus;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.QuestData;
import net.swordie.ms.loaders.containerclasses.QuestInfo;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.world.field.Field;
import net.swordie.orm.dao.QuestDao;
import net.swordie.orm.dao.SworDaoFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.persistence.*;
import java.util.*;
import java.util.stream.Collectors;

import static net.swordie.ms.enums.ChatType.Mob;
import static net.swordie.ms.enums.QuestStatus.*;

/**
 * Created on 12/20/2017.
 */
public class QuestManager {

    private static final Logger log = LogManager.getLogger();
    private static final QuestDao questDao = (QuestDao) SworDaoFactory.getByClass(Quest.class);

    private long id;

    private Map<Integer, Quest> quests;

    @Transient
    private Char chr;

    public QuestManager() {

    }

    public QuestManager(Char chr) {
        quests = new HashMap<>();
        this.chr = chr;
    }

    public Collection<Quest> getEx() {
        return getQuests().values();
    }

    public Set<Quest> getCompletedQuests() {
        return getQuests().values().stream()
                .filter(quest -> quest.getStatus() == Completed)
                .collect(Collectors.toSet());
    }

    public Set<Quest> getQuestsInProgress() {
        return getQuests().values().stream().
                filter(quest -> quest.getStatus() == Started)
                .collect(Collectors.toSet());
    }

    public int getSize() {
        return quests.size();
    }

    public Map<Integer, Quest> getQuests() {
        if (quests == null) {
            quests = questDao.byQuestManager(this);
        }
        return quests;
    }

    public boolean hasQuestInProgress(int questID) {
        Quest quest = getQuestById(questID);
        return quest != null && quest.getStatus() == Started;
    }

    /**
     * Checks if a quest has been completed, i.e. the status is COMPLETE.
     *
     * @param questID the quest's id to check
     * @return quest completeness
     */
    public boolean hasQuestCompleted(int questID) {
        Quest quest = getQuestById(questID);
        return quest != null && quest.getStatus() == Completed;
    }

    /**
     * Checks if a quest is complete. This means that a quest's status is STARTED, and that all the requirements to
     * complete it have been met.
     *
     * @param questID the quest's id to check
     * @return completeness
     */
    public boolean isComplete(int questID) {
        Quest quest = getQuestById(questID);
        return hasQuestInProgress(questID) && quest.isComplete(chr);
    }

    public void addQuest(Quest quest) {
        addQuest(quest, true);
    }

    public void addCustomQuest(Quest quest) {
        addQuest(quest, false);
    }

    /**
     * Adds a new {@link Quest} to this QuestManager's quests. If it already exists, doesn't do anything.
     *
     * @param quest            The Quest to add.
     * @param addRewardsFromWz Whether or not to addRewards from the WzFiles
     */
    private void addQuest(Quest quest, boolean addRewardsFromWz) {
        //If quest is repeatable, first remove it from the quest list
        if (QuestConstants.REPEATABLE_QUESTS.contains(quest.getQRKey()) && getQuests().containsKey(quest.getQRKey())) {
            getQuests().remove(quest.getQRKey());
        }
        if (getQuestById(quest.getQRKey()) == null) {
            getQuests().put(quest.getQRKey(), quest);

            if (quest.getProperties() == null || quest.getProperties().size() == 0) {
                chr.write(WvsContext.message(MessagePacket.questRecordMessage(quest)));
            } else {
                chr.write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
            }

            if (quest.getStatus() == QuestStatus.Completed) {
                chr.chatMessage(Mob, "[Info] Completed quest " + quest.getQRKey());
            } else {
                chr.chatMessage(Mob, "[Info] Accepted quest " + quest.getQRKey());
                if (addRewardsFromWz) {
                    QuestInfo qi = QuestData.getQuestInfoById(quest.getQRKey());
                    if (qi != null) {
                        for (QuestReward qr : qi.getQuestRewards()) {
                            if ((qr instanceof QuestItemReward && ((QuestItemReward) qr).getStatus() == 0) || (qr instanceof QuestBuffItemReward && ((QuestBuffItemReward) qr).getStatus() == 0)) {
                                qr.giveReward(getChr());
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * Returns whether or not a {@link Char} can start a given quest.
     *
     * @param questID The Quest's ID to check.
     * @return Whether or not the Char can start the quest.
     */
    public boolean canStartQuest(int questID) {
        QuestInfo qi = QuestData.getQuestInfoById(questID);
        if (qi == null) {
            return true;
        }
        Set<QuestStartRequirement> questReqs = qi.getQuestStartRequirements().stream()
                .filter(qsr -> qsr instanceof QuestStartCompletionRequirement)
                .collect(Collectors.toSet());
        boolean hasQuest = questReqs.size() == 0 ||
                questReqs.stream().anyMatch(q -> q.hasRequirements(chr));

        var items = new ArrayList<Item>();
        for (QuestReward qr : qi.getQuestRewards()) {
            if (qr instanceof QuestItemReward && ((QuestItemReward) qr).getStatus() == 0) {
                var qir = ((QuestItemReward) qr);
                if (qir.getQuantity() > 0) {
                    var item = ItemData.getItemDeepCopy(qir.getId());
                    item.setQuantity(qir.getQuantity());
                    items.add(item);
                }
            }
        }

        if (items.size() != 0 && !chr.canHold(items)) {
            chr.chatMessage("Your inventory is full. Please make more space before trying to accept this quest.");
            return false;
        }
        return hasQuest && qi.getQuestStartRequirements().stream()
                .filter(qsr -> !(qsr instanceof QuestStartCompletionRequirement))
                .allMatch(qsr -> qsr.hasRequirements(chr));
    }

    public Char getChr() {
        return chr;
    }

    /**
     * Completes a quest. Assumes the check for in-progressness has already been done, so this method can be used
     * to complete quests that the Char does not actually have.
     *
     * @param questId The quest ID to finish.
     */
    public boolean completeQuest(int questId) {
        return completeQuest(questId, true);
    }

    /**
     * Completes a quest. Assumes the check for in-progressness has already been done, so this method can be used
     * to complete quests that the Char does not actually have.
     *
     * @param questId     The quest ID to finish.
     * @param giveRewards whether or not to reward the quest's rewards
     */
    public boolean completeQuest(int questId, boolean giveRewards) {
        QuestInfo questInfo = QuestData.getQuestInfoById(questId);
        if (questInfo == null) {
            return false;
        }

        if (questInfo != null && giveRewards) {
            var items = new ArrayList<Item>();
            for (QuestReward qr : questInfo.getQuestRewards()) {
                if (qr instanceof QuestItemReward && ((QuestItemReward) qr).getStatus() != 0) {
                    var qir = ((QuestItemReward) qr);
                    if (qir.getQuantity() > 0) {
                        var item = ItemData.getItemDeepCopy(qir.getId());
                        item.setQuantity(qir.getQuantity());
                        items.add(item);
                    }
                }
            }

            if (items.size() != 0 && !chr.canHold(items)) {
                chr.chatMessage("Your inventory is full. Please make more space before trying to complete this quest.");
                return false;
            }

            for (QuestReward qr : questInfo.getQuestRewards()) {
                if (!(qr instanceof QuestItemReward) || ((QuestItemReward) qr).getStatus() != 0) {
                    qr.giveReward(chr);
                }
            }
        }

        Quest quest = getQuestById(questId);
        if (quest == null) {
            quest = QuestData.createQuestFromId(questId);
            if (quest == null) {
                return false;
            }
            addQuest(quest);
        }

        quest.setStatus(QuestStatus.Completed);
        quest.setCompletedTime(FileTime.currentTime());
        chr.chatMessage(Mob, "[Info] Completed quest " + quest.getQRKey());
        if (chr.getField() != null) {
            chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.questCompleteEffect()));
            chr.write(UserPacket.effect(Effect.questCompleteEffect()));
        }
        chr.write(WvsContext.message(MessagePacket.questRecordMessage(quest)));

        if (QuestConstants.isSurpriseMissionQuest(questId)) {
            SurpriseMissionModule.completeSurpriseMission(chr);
        }

        if (questInfo.getTransferFields() != null) {
            if (questInfo.getTransferFields().size() > 0) {
                if (questInfo.getTransferFields().containsKey(1)) {
                    Field field = chr.getOrCreateFieldByCurrentInstanceType(questInfo.getTransferFields().get(1));
                    if (field != null) {
                        chr.warp(field);
                    }
                }
            }
        }

        checkAndAddCompletedAccountQuest(questId);
        return true;
    }

    public void checkAndAddCompletedAccountQuest(int questId) {
        var account = chr.getAccount();
        if (QuestConstants.ACCOUNT_WIDE_QUESTS.contains(questId)) {
            account.addCompletedAccountQuest(questId);
        }
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setChr(Char chr) {
        this.chr = chr;
    }

    /**
     * Removes a given quest from this QuestManager, and notifies the client of this change. Does nothing if the Char
     * does not currently have the quest.
     *
     * @param questID the id of the quest that should be removed
     */
    public void removeQuest(int questID) {
        Quest q = getQuestById(questID);
        if (q != null) {
            removeQuest(q);

            if (QuestConstants.isSurpriseMissionQuest(questID)) {
                SurpriseMissionModule.removeSurpriseMission(chr);
            }

            if (QuestConstants.M0_QR_QUESTS.contains(questID)) {
                List<QuestProgressMobRequirement> requirements = new ArrayList<>(q.getMobReqs());
                requirements.sort(Comparator.comparingInt(QuestProgressMobRequirement::getOrder));
                for (QuestProgressMobRequirement qpmr : requirements) {
                    qpmr.setCurrentCount(0);
                }
                chr.write(WvsContext.message(MessagePacket.questRecordExMessage(q)));
            }
        }
    }

    public void removeQuest(Quest q) {
        q.setStatus(NotStarted);
        getQuests().remove(q.getQRKey());
        chr.write(WvsContext.message(MessagePacket.questRecordMessage(q)));
        questDao.delete(q);
    }

    /**
     * Adds a quest to this QuestManager with a given id. If there is no quest with that id, does nothing.
     *
     * @param id the quest's id to add
     */
    public void addQuest(int id) {
        Quest q = QuestData.createQuestFromId(id);
        if (q != null) {
            addQuest(q);
        }
    }

    public Quest getQuestById(int questId) {
        return getQuests().get(questId);
    }

    public Quest getOrCreateQuestById(int questId) {
        Quest quest = getQuestById(questId);
        if (quest == null) {
            addQuest(questId);
        }
        quest = getQuestById(questId);
        return quest;
    }

    public void initUnion() {
        var unionQuest = QuestData.createQuestFromId(QuestConstants.UNION_QUEST);
        var unionRankQuest = QuestData.createQuestFromId(QuestConstants.UNION_RANK);
        var unionPresetQuest = QuestData.createQuestFromId(QuestConstants.UNION_PRESET);
        var currentDateStr = FileTime.currentTime().toYYMMDD();
        unionQuest.setQrValue("q0=1q1=0pq=0q2=0q1Date=" + currentDateStr + "pqDate=" +
                currentDateStr + "q2Date=" + currentDateStr);
        int rank = chr.getUnion().getUnionRank();
        if (rank == 0) {
            rank = 101;
        }
        unionRankQuest.setProperty("rank", rank);
        unionPresetQuest.setProperty("presetNo", chr.getActiveUnionPreset());
        addQuest(unionQuest);
        addQuest(unionRankQuest);
        addQuest(unionPresetQuest);
        completeQuest(QuestConstants.UNION_START_QUEST);
        getChr().getUnionRaid().initialize();
    }

    public void addQuestWithQr(Char chr, int questId, String qrValue) {
        Quest q = getQuestById(questId);
        if (q == null) {
            q = QuestData.createQuestFromId(questId);
            addQuest(q);
        }
        q.setQrValue(qrValue);
        chr.write(WvsContext.message(MessagePacket.questRecordMessage(q)));
        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(q)));
    }

    public List<Quest> getQuestsWithMobSetProgressRequirement() {
        return getQuestsInProgress().stream().filter(q -> Arrays.stream(MobSetType.values()).anyMatch(v -> q.hasMobReq(v.getVal()))).collect(Collectors.toList());
    }
}
