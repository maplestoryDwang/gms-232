function start() {
    var c = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    var b = cm.getMap().getPortal(1).getPosition();
    cm.onTeleport(1, cm.getPlayer().getId(), b.getX(), b.getY())
};