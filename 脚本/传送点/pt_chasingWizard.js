function start() {
    if (!cm.isQuestActive(32648)) {
        cm.playerMessage(-1, "先看看马尔斯的情况吧。")
    } else {
        cm.warp(302050030, 1)
    }
};