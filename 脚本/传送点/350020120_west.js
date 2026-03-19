function start() {
    if (cm.getQuestStatus(33167) == 0) {
        cm.playerMessage(5, "先跟凯琳确认下情况。");
        cm.playerMessage(-1, "先跟凯琳确认下情况。")
    } else {
        cm.warp(350020400, 2)
    }
};