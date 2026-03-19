function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(33530)) {
        if (cm.isQuestFinished(33517) && !cm.isQuestFinished(33527)) {
            cm.warp(330000661, 3)
        } else {
            cm.warp(330000660, 2)
        }
    } else {
        cm.warp(330000005, 2)
    }
};