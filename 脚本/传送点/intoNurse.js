function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(33530)) {
        cm.warp(330000900, 2)
    } else {
        cm.warp(330000400, 2)
    }
};