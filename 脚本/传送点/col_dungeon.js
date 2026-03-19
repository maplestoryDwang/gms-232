function start() {
    var c = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    var b = cm.getMapId();
    if (b == 940204180) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -371, -88)
    } else {
        if (b == 940204200) {
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -169, -928)
        } else {
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -455, -3260)
        }
    }
};