function start() {
    if (cm.getQuestStatus(34454) > 0) {
        cm.warp(450005100, 2)
    } else {
        cm.playerMessage(-1, "这么高的悬崖没法直接跳下去……先向精灵们了解一下情况吧。");
        cm.playerMessage(5, "这么高的悬崖没法直接跳下去……先向精灵们了解一下情况吧。")
    }
};