function start() {
    if (cm.isQuestActive(22010) || cm.getPlayer().getJob() != 2001) {
        cm.warp(100030310, 3)
    } else {
        cm.playerMessage("Cannot enter the Lush Forest without a reason.")
    }
    return true
};