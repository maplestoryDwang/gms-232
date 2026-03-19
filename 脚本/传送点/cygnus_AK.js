function start() {
    if (cm.getQuestStatus(20752) == 1) {
        cm.forceCompleteQuest(20752)
    } else {
        if (cm.getQuestStatus(20755) == 1 || cm.getQuestStatus(20756) == 1 || cm.getQuestStatus(20757) == 1 || cm.getQuestStatus(20757) == 2) {
            cm.warp(927010000, "out00")
        }
    }
};