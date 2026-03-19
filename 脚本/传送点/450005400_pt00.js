function start() {
    if (cm.isQuestFinished(34475)) {
        cm.warp(450005400, 0)
    } else {
        cm.playerMessage(5, "路被堵住了。");
        cm.playerMessage(-1, "路被堵住了。")
    }
};