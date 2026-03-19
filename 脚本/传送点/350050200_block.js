function start() {
    var b = cm.getPortal().getId();
    if (b == 19 || b == 20) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -2932, -1047)
    } else {
        var a = cm.getMap().getPortal(0).getPosition();
        cm.onTeleport(1, cm.getPlayer().getId(), a.getX(), a.getY())
    }
};