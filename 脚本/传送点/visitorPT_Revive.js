function start() {
    var a = cm.getPlayer().getEventInstance();
    if (a == null || a.getProperty("current_instance") == null || a.getProperty("current_instance").equals("0")) {
        cm.warp(502029000, 0)
    } else {
        cm.warp(parseInt(a.getProperty("current_instance")), 0)
    }
};