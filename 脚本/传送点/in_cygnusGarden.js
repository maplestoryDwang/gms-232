function start() {
    if (cm.isQuestActive(31149)) {
        cm.setQuestCustomData(31149, "find");
        cm.playerMessage(5, "确认了希纳斯的庭院的位置。")
    } else {
        cm.warp(271040000, 2)
    }
};