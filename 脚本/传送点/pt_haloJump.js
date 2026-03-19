function start() {
    if (cm.isQuestFinished(33150)) {
        cm.warp(350011021, 0, false)
    } else {
        cm.playerMessage(-1, "还不是离开的时候。");
        cm.playerMessage(5, "还不是离开的时候。")
    }
};