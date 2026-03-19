function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    switch (cm.getMapId()) {
        case 402000521:
            if (cm.getPlayer().getPosition().y == -1990) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 477, -1365)
            }
            if (cm.getPlayer().getPosition().y == -1365) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 480, -704)
            }
            if (cm.getPlayer().getPosition().y == -704) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 256, 63)
            }
            if (cm.getPlayer().getPosition().y == 63) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -253, 63)
            }
            break;
        default:
            cm.playerMessage(5, "未知瞬移地图:" + a + " x:" + cm.getPlayer().getPosition().x + " y:" + cm.getPlayer().getPosition().y)
    }
};