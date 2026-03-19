function start() {
    if (cm.getPlayer().getLevel() < 50) {
        cm.playerMessage(5, "You must be at least level 50.");
        return false
    }
    cm.warp(950101000, 0);
    return true
};