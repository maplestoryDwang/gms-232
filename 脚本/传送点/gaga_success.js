function start() {
    cm.getPlayer().getEvents().getGagaRescue().complete();
    cm.warp(922240100 + (cm.getPlayer().getMapId() - 922240000));
    cm.getPlayer().cancelEffect(2360002);
    return true
};