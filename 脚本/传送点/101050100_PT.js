function start() {
    if (cm.isQuestActive(38041) || cm.isQuestActive(38044)) {
        if (!cm.isQuestFinished(38041)) {
            cm.forceCompleteQuest(38041)
        }
        cm.warp(910150300, 0)
    } else {
        cm.warp(101050000, 9)
    }
};