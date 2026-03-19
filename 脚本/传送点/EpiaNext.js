function start() {
    var a = cm.getInfoQuest(3178);
    if (a != null && a.equals("clear")) {
        cm.warp(921140001, 0)
    } else {
        cm.playerMessage(5, "这里的道路还很危险，得先为伊帕娅扫清障碍才行。")
    }
    return true
};