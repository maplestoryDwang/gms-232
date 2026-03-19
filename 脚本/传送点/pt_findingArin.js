function start() {
    if (!cm.isQuestActive(32644)) {
        cm.playerMessage(5, "现在不是探索这里的时候。");
        cm.playerMessage(-1, "现在不是探索这里的时候。")
    } else {
        cm.warp(302040500, 0)
    }
};