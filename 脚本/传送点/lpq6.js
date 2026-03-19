function start() {
    var c = 922010600;
    var b = cm.getPlayer().getEventInstance();
    var e = b.getMapInstance(c);
    var a = e.getPortal("st00");
    var d = b.getProperty("5stageclear");
    if (d == null) {
        cm.getPlayer().dropMessage(5, "Some seal is blocking this door.");
        return false
    } else {
        cm.getPlayer().changeMap(e, a);
        return true
    }
};