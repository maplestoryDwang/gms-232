function start() {
    var a = cm.getPlayer().getPosition();
    if (a.x <= 1000) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 800, -695)
    } else {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 1700, -695)
    }
};