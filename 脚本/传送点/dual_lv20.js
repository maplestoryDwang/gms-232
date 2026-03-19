function start() {
    if (cm.getPlayer().getLevel() >= 20) {
        cm.warp(103050310, 0)
    } else {
        cm.playerMessage(5, "You must be level 20.")
    }
};