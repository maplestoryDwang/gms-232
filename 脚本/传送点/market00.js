var 传送点;

function start() {
    var a = cm.getSavedLocation("FREE_MARKET");
    cm.clearSavedLocation("FREE_MARKET");
    var b = cm.getMap(a);
    if (a < 0) {
        a = 100000000
    }
    if (b == null || a == 950000100) {
        cm.warp(100000000, 0);
        return
    }
    if (a == 230000000) {
        传送点 = b.getPortal("market01")
    } else {
        传送点 = b.getPortal("market00")
    }
    if (传送点 == null) {
        传送点 = b.getPortal(0)
    }
    if (cm.getMapId() != b) {
        cm.getPlayer().changeMap(b, 传送点)
    }
};