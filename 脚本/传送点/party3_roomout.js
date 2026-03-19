function start() {
    if (cm.getPlayer().getParty() != null && cm.isLeader()) {
        cm.warpParty(920010100)
    } else {
        cm.playerMessage(5, "如果想暂时离开请让队长过来。")
    }
};