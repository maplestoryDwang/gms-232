function start() {
    if (cm.getPlayer().getParty() != null && cm.isLeader()) {
        cm.warpParty(920010300)
    } else {
        cm.playerMessage(5, "Please get the leader in this portal.")
    }
};