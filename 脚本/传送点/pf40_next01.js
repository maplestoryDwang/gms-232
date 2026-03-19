function start() {
    var a = cm.getMap().getPortal(2).getPosition();
    cm.onTeleport(1, cm.getPlayer().getId(), a.getX(), a.getY());
    return true
};