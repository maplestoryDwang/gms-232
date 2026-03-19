function start() {
    var c = cm.getEventInstance();
    var b = c.getEventManager();
    var a = b.getNumberProperty("clear");
    cm.getMap().setSpawn(true);
    if (a > 0) {
        cm.warp(cm.getMapId() + 100, 2)
    } else {
        cm.addPopupSay(1540454, 1000, "队长！现在还不能过去。", "")
    }
};