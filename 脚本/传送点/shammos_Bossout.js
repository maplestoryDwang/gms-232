function start() {
    if (cm.getPlayer().getParty() != null && cm.getMap().getNumMonsters() == 0 && cm.isLeader()) {
        cm.warpParty(921120400)
    } else {
        cm.playerMessage(5, "This portal is not available. Destroy Rex first.")
    }
};