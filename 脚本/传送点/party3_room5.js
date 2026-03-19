function start() {
    if (cm.getPlayer().getParty() != null && cm.isLeader()) {
        cm.warpParty(920010600)
    } else {
        cm.playerMessage(5, "Please get the leader in this portal.")
    }
};