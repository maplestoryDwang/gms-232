function start() {
    if (cm.isQuestFinished(31125)) {
        cm.warp(271030100, 4)
    } else {
        cm.setQuestCustomData(31124, "end");
        cm.playerMessage(5, "要塞的警戒强化了，无法入场。")
    }
};