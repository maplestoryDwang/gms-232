package net.swordie.ms.client.surprisemission;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.RandomMissionType;
import net.swordie.ms.loaders.QuestData;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Util;

/**
 * Created on 29/01/2022.
 *
 * @author Asura
 */
public class SurpriseMissionModule {
    public static void setSurpriseMissionCooltime(Char chr) {
        chr.addSkillCoolTime(QuestConstants.SURPRISE_MISSION_QUEST_ID, GameConstants.SURPRISE_MISSION_COOLTIME);
    }

    private static boolean isOnSurpriseMissionCooltime(Char chr) {
        return chr.hasSkillOnCooldown(QuestConstants.SURPRISE_MISSION_QUEST_ID);
    }

    private static boolean hasSurpriseMissionCurrently(Char chr) {
        return chr.getSurpriseMission() != null;
    }

    private static boolean canStartSurpriseMission(Char chr) {
        return !isOnSurpriseMissionCooltime(chr) && !hasSurpriseMissionCurrently(chr) && chr.getLevel() >= GameConstants.SURPRISE_MISSION_MIN_LEVEL;
    }


    public static void tryStartSurpriseMission(Char chr) {
        if (!canStartSurpriseMission(chr)) {
            return;
        }

        if (Util.succeedProp(GameConstants.SURPRISE_MISSION_CHANCE)) {
            startSurpriseMission(chr);
        }
    }

    public static void startSurpriseMission(Char chr) {
        var randomSurpriseMission = Util.getRandomFromCollection(QuestConstants.getSurpriseMissionQuestIds());

        var qi = QuestData.getQuestInfoById(randomSurpriseMission);
        var timeLimit = qi.getTimeLimit(); // seconds

        var currentSurpriseMissionQuest = QuestData.createQuestFromId(randomSurpriseMission);
        var surpriseMissionInfoQuest = chr.getQuestManager().getOrCreateQuestById(QuestConstants.SURPRISE_MISSION_QUEST_ID);

        var now = FileTime.currentTime();
        var expiration = FileTime.fromDate(now.toLocalDateTime().plusSeconds(timeLimit));

        currentSurpriseMissionQuest.setPropertyEx("QET", expiration.toClientInYYYYMMDDHHMMSS());

        surpriseMissionInfoQuest.setPropertyEx("count", 0); // completed surprise missions today
        surpriseMissionInfoQuest.setPropertyEx("Quest", randomSurpriseMission);
        surpriseMissionInfoQuest.setPropertyEx("QET", now.toClientInYYYYMMDDHHMMSS());
        surpriseMissionInfoQuest.setPropertyEx("state", 2); // 1 = Setting up | 2 = In Progress | 3 = Finished (Claim Reward)

        var mission = new SurpriseMission(chr, currentSurpriseMissionQuest, surpriseMissionInfoQuest, now, expiration);
        chr.setSurpriseMission(mission);

        showSurpriseMissionToClient(chr, mission);
    }

    public static void showSurpriseMissionToClient(Char chr, SurpriseMission mission) {
        var quest = mission.getCurrentSurpriseMission();
        var info = mission.getSurpriseMissionInfo();

        chr.write(WvsContext.message(MessagePacket.setCurrentTime(FileTime.currentTime())));
        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(info)));
        chr.getQuestManager().addQuest(quest);
    }

    // Allows user to claim reward
    public static void completeSurpriseMission(Char chr) {
        if (chr.getSurpriseMission() == null) {
            return;
        }

        var mission = chr.getSurpriseMission();
        var now = FileTime.currentTime();
        var expiration = FileTime.fromDate(now.toLocalDateTime().plusSeconds(GameConstants.SURPRISE_MISSION_CLAIM_REWARD_TIME_LIMIT));

        var info = chr.getQuestManager().getQuestById(QuestConstants.SURPRISE_MISSION_QUEST_ID);
        info.setPropertyEx("state", 3);
        info.setPropertyEx("QET", expiration.toClientInYYYYMMDDHHMMSS());

        mission.stopTimer(); // stop previous timer

        // start the timer for the reward claim
        chr.setSurpriseMission(new SurpriseMission(chr, mission.getCurrentSurpriseMission(), info, now, expiration));

        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(info)));
        setSurpriseMissionCooltime(chr);
    }

    // User pressed 'claim reward'
    public static void claimSurpriseMissionReward(Char chr, SurpriseMission mission) {
        if (mission == null) {
            return;
        }

        var itemId = 4000158;
        var quantity = 1;
        var money = 1;

        if (!chr.canHold(itemId, quantity)) {
            chr.write(WvsContext.randomMissionResult(RandomMissionType.Res_InventoryFull, 0, 0));
            return;
        }

        if (chr.getMoney() + money > GameConstants.MAX_MONEY) {
            chr.write(WvsContext.randomMissionResult(RandomMissionType.Res_TooManyMesos, 0, 0));
            return;
        }

        // TODO Proper Reward for completing Surprise Mission
        chr.addItemToInventory(itemId, quantity);
        chr.addMoney(money);

        removeSurpriseMission(chr);
        chr.write(WvsContext.randomMissionResult(RandomMissionType.Res_Success, 0, 0));
    }

    public static void removeSurpriseMission(Char chr) {
        var mission = chr.getSurpriseMission();

        if (mission == null) {
            return;
        }

        mission.stopTimer();
        var qm = chr.getQuestManager();
        var quest = qm.getQuestById(mission.getCurrentSurpriseMission().getQRKey());
        if (quest != null) {
            qm.removeQuest(quest);
        }


        var info = qm.getQuestById(QuestConstants.SURPRISE_MISSION_QUEST_ID);
        info.setPropertyEx("Quest", 0);
        info.setPropertyEx("state", 1);

        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(info)));
        chr.write(WvsContext.message(MessagePacket.questExpireMessage(mission.getCurrentSurpriseMission().getQRKey())));

        chr.setSurpriseMission(null);

        setSurpriseMissionCooltime(chr);
    }
}
