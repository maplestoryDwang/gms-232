function start() {
    var c = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    var b = cm.getInfoQuest(62012);
    if (!b.contains("secret=")) {
        cm.warp(701220352, 0)
    } else {
        if (b.contains("secret=2") || b.contains("secret=3")) {
            cm.openNpc(1, "少林寺藏经阁_传送点提示")
        } else {
            if (cm.isQuestActive(62036)) {
                cm.warp(701220351, 0)
            } else {
                cm.warp(701220350, 0)
            }
        }
    }
};