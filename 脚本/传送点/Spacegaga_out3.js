function start() {
    if (cm.getPlayer().getEvents().getGagaRescue().fallAndGet() > 3) {
        cm.warp(922240200);
        cm.getPlayer().cancelEffect(2360002)
    } else {
        cm.warp(cm.getPlayer().getMapId())
    }
    return true
};