function start() {
    if (cm.isQuestFinished(24002) && cm.getQuestStatus(24040) == 0) {
        cm.warp(910150004, 0, false)
    } else {
        cm.warp(101050010, 0, false)
    }
};