function start() {
    var b = cm.getSavedLocation("ARDENTMILL");
    cm.clearSavedLocation("ARDENTMILL");
    if (b < 0) {
        b = 100000000
    }
    var c = cm.getMap(b);
    var a = c.getPortal("profession");
    if (a == null) {
        a = c.getPortal(0)
    }
    if (cm.getMapId() != c) {
        cm.getPlayer().changeMap(c, a)
    }
};