function start() {
    var f = cm.getPortal().getId();
    var b = cm.getPortal().getName();
    var d = cm.getEventInstance();
    var c = d.getEventManager();
    var a = c.getNumberProperty("clear");
    var e = cm.getMapId();
    if (a > 0) {
        if (e == 330007500) {
            cm.warp(330002605, 0)
        } else {
            if (e == 330007800) {
                cm.gainExp(Math.pow(cm.getLevel(), 3));
                cm.forceCompleteQuest(33523);
                cm.warp(330001800, 0)
            }
        }
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。")
    }
};