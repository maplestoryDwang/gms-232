function start() {
    var f = cm.getPortal().getId();
    var b = cm.getPortal().getName();
    var d = cm.getEventInstance();
    var c = d.getEventManager();
    var a = c.getNumberProperty("clear");
    var e = cm.getMapId();
    if (a > 0) {
        if (e == 330006200) {
            cm.warp(330002116, 0)
        } else {
            if (e == 330006500) {
                cm.forceCompleteQuest(32781);
                cm.warp(330001800, 0)
            } else {
                if (e == 330006800) {
                    cm.forceStartQuest(32868, "");
                    cm.warp(330004200, 0)
                } else {
                    if (e == 330007100) {
                        cm.forceCompleteQuest(33025);
                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                        cm.warp(330001900, 0)
                    }
                }
            }
        }
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。")
    }
};