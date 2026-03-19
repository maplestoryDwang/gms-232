function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getQuestStatus(62007) > 0) {
        cm.warp(701220100, 0)
    } else {
        cm.playerMessage(5, "妖怪们的力量太强，无法进入藏经阁. ")
    }
};