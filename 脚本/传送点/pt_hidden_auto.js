function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    switch (cm.getMapId()) {
        case 402000522:
            if (cm.getPlayer().getPosition().y == -665) {
                if (cm.getPlayer().getPosition().x < 0) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -506, -1337)
                } else {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 480, -1007)
                }
            }
            if (cm.getPlayer().getPosition().y == -1337) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -251, -665)
            }
            if (cm.getPlayer().getPosition().y == -1007) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 250, -665)
            }
            break;
        case 402000523:
            if (cm.getPlayer().getPosition().y == -1348) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -283, -1960)
            }
            if (cm.getPlayer().getPosition().y == -1960) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -240, -1348)
            }
            break;
        case 402000525:
            if (cm.getPlayer().getPosition().y == -665) {
                if (cm.getPlayer().getPosition().x < 0) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -294, -1628)
                } else {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 482, -1336)
                }
            }
            if (cm.getPlayer().getPosition().y == -1628) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -245, -665)
            }
            if (cm.getPlayer().getPosition().y == -1336) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 250, -665)
            }
            cm.playerMessage(5, "瞬移地图:" + a + " x:" + cm.getPlayer().getPosition().x + " y:" + cm.getPlayer().getPosition().y);
            break;
        default:
            cm.playerMessage(5, "瞬移地图:" + a + " x:" + cm.getPlayer().getPosition().x + " y:" + cm.getPlayer().getPosition().y)
    }
};