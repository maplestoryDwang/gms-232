function start() {
    var c = cm.getPortal().getId();
    var b = cm.getPortal().getName();
    var a = cm.getPlayer().getPosition().x;
    if (a < 544) {
        cm.onTeleport(1, cm.getPlayer().getId(), 0, 100)
    } else {
        cm.onTeleport(1, cm.getPlayer().getId(), 1000, 100)
    }
};