function start() {
    var a = cm.getMap().getPortal(6).getPosition();
    cm.onTeleport(1, cm.getPlayer().getId(), a.getX(), a.getY());
    return true
};