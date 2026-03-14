package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.enums.QuestStatus;
import net.swordie.ms.loaders.QuestData;
import net.swordie.ms.util.FileTime;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName PyQuestAPI.java
 * @Description TODO
 * @createTime 2026-02-27 16:58
 */

public interface PyQuestAPI extends DwangScriptBaseApi {
    
    default void completeQuest(int questID) {
        if (hasQuest(questID) && isComplete(questID)) {
            completeQuestNoCheck(questID);
        }
    }

    
    default void completeQuestNoCheck(int questID) {
        getChr().getQuestManager().completeQuest(questID);
    }

    
    default void completeQuestNoRewards(int id) {
        QuestManager qm = getChr().getQuestManager();
        Quest quest = qm.getQuestById(id);
        if (quest == null) {
            quest = QuestData.createQuestFromId(id);
        }
        quest.setCompletedTime(FileTime.currentTime());
        quest.setStatus(QuestStatus.Completed);
        qm.addQuest(quest);
        qm.checkAndAddCompletedAccountQuest(id);
        getChr().write(WvsContext.message(MessagePacket.questRecordMessage(quest)));

//        chr.chatMessage(String.format("Quest %d completed by completeQuestNoRewards", id));
    }

    
    default void startQuestNoCheck(int id) {
        QuestManager qm = getChr().getQuestManager();
        qm.addQuest(QuestData.createQuestFromId(id));
//        chr.chatMessage(String.format("Quest %d started by startQuestNoCheck", id));
    }

    
    default void startQuest(int id) {
        QuestManager qm = getChr().getQuestManager();
        if (qm.canStartQuest(id)) {
            qm.addQuest(QuestData.createQuestFromId(id));
        } else {
            String s = "py - quest: [" + id +"]: 您不符合开始此任务的要求，如果您认为这是意外情况，请在Bug中报告。.";
            log.info(s);
            getInitData(). getChr().chatMessage(s);
        }
    }

    
    default boolean hasQuest(int id) {
        return getChr().getQuestManager().hasQuestInProgress(id);
    }

    
    default boolean hasQuestCompleted(int id) {
        return getChr().getQuestManager().hasQuestCompleted(id);
    }

    default boolean hasHadQuest(int id) {
        return hasQuest(id) || hasQuestCompleted(id);
    }

    default void createQuestWithQRValue(int questId, String qrValue, boolean ex) {
        createQuestWithQRValue(getChr(), questId, qrValue, ex);
    }

    default void createQuestWithQRValue(int questId, String qrValue) {
        createQuestWithQRValue(getChr(), questId, qrValue, true);
    }

    default void createQuestWithQRValue(Char chr, int questId, String qrValue) {
        createQuestWithQRValue(chr, questId, qrValue, true);
    }

    default void createQuestWithQRValue(Char character, int questId, String qrValue, boolean ex) {
        QuestManager qm = character.getQuestManager();
        Quest quest = qm.getQuestById(questId);
        if (quest == null) {
            quest = QuestData.createQuestFromId(questId);
            quest.setQrValue(qrValue);
            qm.addCustomQuest(quest);
        }
        quest.setQrValue(qrValue);
        updateQRValue(questId, ex);
    }

    default void deleteQuest(int questId) {
        deleteQuest(getChr(), questId);
    }

    default void deleteQuest(Char chr, int questId) {
        QuestManager qm = chr.getQuestManager();
        Quest quest = qm.getQuestById(questId);
        if (quest == null) {
            return;
        }
        qm.removeQuest(quest.getQRKey());
    }

    default String getQRValue(int questId) {
        return getQRValue(getChr(), questId);
    }

    default String getQRValue(int questId, String questKey) {
        Quest quest = getChr().getQuestManager().getQuestById(questId);
        if (quest == null) {
            return "";
        }
        return quest.getProperty(questKey);
    }

    default String getQRValue(Char chr, int questId) {
        Quest quest = chr.getQuestManager().getQuestById(questId);
        if (quest == null) {
            return "";
        }
        return quest.getQRValue();
    }

    default boolean hasQuestWithValue(int qrKey, String str) {
        Quest quest = getChr().getQuestManager().getQuestById(qrKey);
        if (quest == null) {
            return false;
        }
        return quest.getQRValue().contains(str);
    }

    default void setQRValue(int questId, String qrValue) {
        setQRValue(questId, qrValue, true);
    }

    default void setQRValue(int questId, String key, String value) {
        QuestManager qm = getChr().getQuestManager();
        Quest quest = qm.getQuestById(questId);
        if (quest == null) {
            quest = QuestData.createQuestFromId(questId);
            qm.addQuest(quest);
        }
        quest.setProperty(key, value);
        getChr().write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
    }

    default void setQRValue(int questId, String qrValue, boolean ex) {
        setQRValue(getChr(), questId, qrValue, ex);
    }

    default void setQRValue(Char chr, int questId, String qrValue, boolean ex) {
        Quest quest = chr.getQuestManager().getQuestById(questId);
        if (quest == null) {
            quest = QuestData.createQuestFromId(questId);
            chr.getQuestManager().addQuest(quest);
        }
        quest.setQrValue(qrValue);
        updateQRValue(questId, ex);
    }

    default void addQRValue(int questId, String qrValue) {
        addQRValue(questId, qrValue, true);
    }

    default void addQRValue(int questId, String qrValue, boolean ex) {
        String qrVal = getQRValue(questId);
        if (qrVal.equals("")) {
            createQuestWithQRValue(questId, qrValue);
            return;
        }
        setQRValue(questId, qrValue + ";" + qrVal);
        updateQRValue(questId, ex);
    }

    default boolean isComplete(int questID) {
        return getChr().getQuestManager().isComplete(questID);
    }

    default void updateQRValue(int questId, boolean ex) {
        Quest quest = getChr().getQuestManager().getQuestById(questId);
        if (quest == null) {
            log.error(String.format("The user does not have the quest %d.", questId));
            return;
        }
        if (ex) {
            getChr().write(WvsContext.message(MessagePacket.questRecordMessage(quest)));
            getChr().write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
        } else {
            getChr().write(WvsContext.message(MessagePacket.questRecordMessage(quest)));
        }
    }

    default String getCurrentDateAsString() {
        return FileTime.currentTime().toYYMMDD();
    }
}
