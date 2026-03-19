function start() {
    if (cm.isQuestFinished(21751) && cm.getQuestStatus(21753) == 0) {
        cm.warp(930010000, 0, false);
        cm.playerMessage(5, "进入了图书馆。请用鼠标寻找保管库在什么地方。")
    } else {
        cm.warp(300000011, 1)
    }
};