function start() {
    var b = cm.getSavedLocation("MULUNG_TC");
    cm.clearSavedLocation("MULUNG_TC");
    if (b == 950000100) {
        b = 211000001;
        a = 4
    }
    var c = cm.getMap(b);
    var a = c.getPortal("unityPortal2");
    if (a == null) {
        a = c.getPortal(0)
    }
    if (cm.getMapId() != c) {
        cm.getPlayer().changeMap(c, a)
    }
};