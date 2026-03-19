function start() {
    var a = em.getNumberProperty("clear");
    var b = cm.getMapId();
    if (a > 0) {
        if (b == 350023300 || b == 350023400) {
            cm.warp(b + 100, 2)
        } else {
            cm.warp(b + 100, 1)
        }
    } else {
        cm.addPopupSay(1540454, 1000, "队长！现在还不能过去。", "")
    }
};