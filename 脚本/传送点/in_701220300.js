function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getQuestStatus(62011) == 2) {
        cm.warp(701220200, 0)
    } else {
        cm.playerMessage(5, "力量强大的妖怪阻挡着传送口。")
    }
};