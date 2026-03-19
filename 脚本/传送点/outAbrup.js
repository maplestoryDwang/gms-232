function start() {
    var a = parseInt(cm.getInfoQuest(cm.getMapId()));
    if (isNaN(a) || a < 1) {
        a = 950000100
    }
    cm.warp(a, 0)
};