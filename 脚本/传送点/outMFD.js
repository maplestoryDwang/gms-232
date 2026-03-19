function start() {
    var f = cm.getPortal().getId();
    var b = cm.getPortal().getName();
    var e = cm.getMapId();
    var d = cm.getEventInstance();
    var c = d.getEventManager();
    var a = c.getNumberProperty("clear");
    if (e == 330003600 && a > 0) {
        cm.openNpc(601, "好友故事_传送")
    } else {
        cm.warp(330003000, 1)
    }
};