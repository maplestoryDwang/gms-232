function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestFinished(62002)) {
        cm.warp(701220000, 1)
    } else {
        cm.playerMessage(5, "只有得到许可的人才能进入大雄宝殿。")
    }
};