function start() {
    var a = 7;
    var b = cm.getMap().getPortal(a).getPosition();
    cm.onTeleport(1, cm.getPlayer().getId(), b.getX(), b.getY() - 10);
    return true
};