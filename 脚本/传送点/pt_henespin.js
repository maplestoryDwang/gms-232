function start() {
    if (cm.getQuestStatus(32707) > 0) {
        cm.warp(100000004, 1)
    } else {
        cm.playerMessage(5, "门关得紧紧的。")
    }
};