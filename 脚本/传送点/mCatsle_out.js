function start() {
    if (cm.getQuestStatus(13109) == 1) {
        cm.warp(130000000, 0);
        return
    } else {
        cm.warp(100000000, 1)
    }
};