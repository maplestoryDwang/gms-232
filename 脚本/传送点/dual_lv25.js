function start() {
    if (cm.getPlayer().getLevel() >= 25) {
        cm.warp(103050340, 0)
    } else {
        cm.playerMessage(5, "You must be level 25.")
    }
};