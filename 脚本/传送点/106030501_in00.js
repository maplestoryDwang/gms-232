function start() {
    if (cm.isQuestFinished(30064)) {
        cm.warp(106030600, 0)
    } else {
        cm.playerMessage(5, "甲板上的大海盗有点多，先清理掉一部分再深入探索吧。")
    }
    return true
};