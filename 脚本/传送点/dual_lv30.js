function start() {
    if (cm.getPlayer().getLevel() >= 30) {
        cm.warp(103050370, 0)
    } else {
        cm.playerMessage(5, "You must be level 30.")
    }
};