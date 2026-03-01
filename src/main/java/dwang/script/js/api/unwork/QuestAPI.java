package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface QuestAPI extends DwangScriptBaseApi {

    default boolean isQuestActive(int id) {
        return getChr().getQuestManager().hasQuestInProgress(id);

    }

    default void getCharsFromQuestInfo(int questId, String key) { }

    default void setStringForQuestInfo(int questId, String key, Object num) { }

    default void canCompleteQuest(int id) { }

    default void setNumberForAccountQuestInfo(int questId, String key, int val) { }

    default void getQuestStatus(int id) { }

    default void setNumberForQuestCustomData(int quest, int data) { }

    default void forceCompleteQuest() { }

    default void isQuestFinished(int id) { }

    default void addNumberForAccountQuestInfo(int questId, String key, int diff, int min, int max) { }

    default void forceForfeitQuest() { }

    default void showCompleteQuestEffect() { }

    default void addNumberForQuestCustomData(int quest, int diff) { }

    default void clearAllQuests() { }

    default void completeQuest(int idd) { }

    default void getStringFromQuestInfo(int questId, String key, String value) { }

    default void getNumberFromAccountQuestInfo(int questId, String key, int value) { }

    default void setAccountQuestInfo(int questId, String info) { }

    default void addNumberForAccountQuestInfo(int questId, String key, int diff) { }

    default void getQuestName(int questId) { }

    default void getNumberFromQuestInfo(int questId, String key) { }

    default void getAccountQuestInfo(int questId) { }

    default void getQuestRecord(int id) { }

    default void getNumberFromQuestInfo(int questId, String key, int value) { }

    default void getStringFromQuestInfo(int questId, String key) { }

    default void forceStartQuest(int id) { }

    default void forfeitQuest(int idd) { }

    default void getNumberFromQuestCustomData(int quest) { }

    default void addNumberForQuestInfo(int questId, String key, int diff, int min, int max) { }

    default void forceStartQuest(int id, String customData) { }

    default void getQuestCustomData(int quest) { }

    default void getStringFromAccountQuestInfo(int questId, String key, String value) { }

    default void startQuestScript(int npc, int quest) { }

    default void getQuestCustomData() { }

    default void isValidQuest(int id) { }

    default void questMobKilled(int id, int skillID) { }

    default void setQuestCustomData(String customData) { }

    default void forceForfeitQuest(int id) { }

    default void forceCompleteQuest(int id) { }

    default void forceStartQuest(int id, String customData, int siliently) { }

    default void setQuestCustomData(int quest, String data) { }

    default void startQuestClock(int action, int quest, int time) { }

    default void synchToAccountQuestInfo(int questInfo) { }

    default void synchFromAccountQuestInfo(int questInfo) { }

    default void updateInfoQuest(int id, String data) { }

    default void setNumberForQuestInfo(int questId, String key, int num) { }

    default void endQuestClock(int action, int quest) { }

    default void forceStartQuest() { }

    default void addNumberForQuestInfo(int questId, String key, int diff) { }

    default void canStartQuest(int id) { }

    default void setStringForAccountQuestInfo(int questId, String key, String val) { }

    default void endQuestScript(int npc, int quest) { }

    default void waitForEvent(int quest) { }

    default void getInfoQuest(int id) { }

}
