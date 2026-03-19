function start() {
    if (cm.getPlayer().getParty() != null && cm.isLeader()) {
        cm.warpParty(920010400)
    } else {
        cm.playerMessage(5, "只有队长才可以申请进入。")
    }
};