function start() {
    var b = cm.getPortal().getId();
    if (b == 8 || b == 9) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -3000, 204)
    } else {
        var a = cm.getMap().getPortal(0).getPosition();
        cm.onTeleport(1, cm.getPlayer().getId(), a.getX(), a.getY())
    }
};