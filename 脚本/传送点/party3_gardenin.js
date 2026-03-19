function start() {
    if (cm.getPlayer().getParty() != null && cm.isLeader() && cm.haveItem(4001055, 1)) {
        cm.warpParty(920010100, 0)
    } else {
        cm.playerMessage(5, "队长必须拥有<生命草>才能申请离开。")
    }
};