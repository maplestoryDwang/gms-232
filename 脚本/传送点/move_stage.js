function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(62037)) {
        cm.openNpc(0, "副本_少林寺_藏经阁高层")
    } else {
        if (cm.isQuestFinished(62037)) {
            cm.warp(701220400, 0)
        } else {
            cm.playerMessage(5, "妖怪的力量太强了，无法前往下一层。")
        }
    }
};