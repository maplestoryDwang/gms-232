function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(33519) || cm.isQuestActive(33520)) {
        cm.warp(330000700, 0)
    } else {
        cm.warp(330001200, 1)
    }
};