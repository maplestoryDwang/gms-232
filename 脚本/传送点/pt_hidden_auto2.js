function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    switch (cm.getMapId()) {
        case 402000521:
            if (cm.getPlayer().getPosition().y == 63) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -469, -377)
            }
            if (cm.getPlayer().getPosition().y == -377) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -264, -992)
            }
            if (cm.getPlayer().getPosition().y == -992) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -468, -1699)
            }
            if (cm.getPlayer().getPosition().y == -1699) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 272, -1990)
            }
            break;
        case 402000524:
            if (cm.getPlayer().getPosition().y == -665) {
                cm.warp(402000522, 3)
            }
            if (cm.getPlayer().getPosition().y == -1337) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 285, -1626)
            }
            if (cm.getPlayer().getPosition().y == -1626) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 485, -1007)
            }
            if (cm.getPlayer().getPosition().y == -1007) {
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -495, -1337)
            }
            cm.playerMessage(5, "未知瞬移地图:" + a + " x:" + cm.getPlayer().getPosition().x + " y:" + cm.getPlayer().getPosition().y);
            break;
        default:
            cm.playerMessage(5, "未知瞬移地图:" + a + " x:" + cm.getPlayer().getPosition().x + " y:" + cm.getPlayer().getPosition().y)
    }
};