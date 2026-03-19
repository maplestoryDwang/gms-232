function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getQuestStatus(57437) == 1) {
        cm.warp(807050201, 0)
    } else {
        if (cm.isQuestActive(57141)) {
            cm.warp(807050201, 0)
        }
    }
};