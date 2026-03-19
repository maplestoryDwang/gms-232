function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(32745)) {
        cm.warp(330002108, 1)
    } else {
        cm.warp(330000003, 0)
    }
};