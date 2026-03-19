function start() {
    cm.warp(401052100, 2);
    if (cm.isQuestFinished(31505) && cm.getQuestStatus(31506) == 0) {
        cm.startQuestScript(0, 31506)
    }
};