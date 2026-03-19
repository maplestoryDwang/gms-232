function start() {
    if (cm.getQuestStatus(20020) == 0) {
        cm.hireTutorMsg(1);
        cm.forceCompleteQuest(20020)
    }
};