function start() {
    if (cm.getJob() == 412) {
        if ((cm.haveItem(4001110) && cm.getQuestStatus(6230)) == 0 || cm.getQuestStatus(6230) == 1 || (cm.getQuestStatus(6230) == 2 && cm.getQuestStatus(6231) == 0)) {
            cm.warp(922020200, 0)
        }
    }
};