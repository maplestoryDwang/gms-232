function start() {
    if (cm.isQuestActive(34267) || cm.isQuestFinished(34267)) {
        cm.warp(450006400, 1)
    } else {
        cm.playerMessage(-1, "不知道通向哪里。我还有别的事情要做，没时间浪费了。");
        cm.playerMessage(5, "不知道通向哪里。我还有别的事情要做，没时间浪费了。")
    }
};