function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(32716)) {
        cm.warp(330002054, 0)
    } else {
        cm.warp(330001600, 1)
    }
};