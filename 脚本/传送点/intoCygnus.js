function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(32768)) {
        cm.warp(330002204, 0)
    } else {
        if (cm.isQuestActive(33530)) {
            cm.warp(330000610, 0)
        } else {
            cm.warp(330001100, 1)
        }
    }
};