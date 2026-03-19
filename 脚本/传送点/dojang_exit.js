function start() {
    var a = cm.getNumberFromQuestInfo(5050505050, "map");
    if (isNaN(a) || a < 1) {
        a = 950000100
    }
    cm.warp(a, 0)
};