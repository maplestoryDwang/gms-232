function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(32714)) {
        cm.warp(330002052, 0)
    } else {
        cm.warp(330000010, 0)
    }
};