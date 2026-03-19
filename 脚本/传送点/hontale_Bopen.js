function start() {
    if (cm.getPlayer().getMapId() == 240050105) {
        cm.warp(240050400, "st00")
    } else {
        cm.warp(cm.getPlayer().getMapId() + 1, "st00")
    }
    return true
};