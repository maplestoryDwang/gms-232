function start() {
    if (cm.getPlayer().getEventInstance() != null) {
        var a = parseInt(cm.getPlayer().getEventInstance().getProperty("mode"));
        cm.gainExp((a == 0 ? 1500 : (a == 1 ? 5500 : 16000)));
        cm.getPlayer().modifyCSPoints(1, (a == 0 ? 150 : (a == 1 ? 300 : 600)))
    }
    cm.warp(682000000, 0)
};