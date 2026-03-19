function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(33530)) {
        cm.warp(330000600, 0)
    } else {
        cm.warp(330000300, 1)
    }
};