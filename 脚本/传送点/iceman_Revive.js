function start() {
    if (cm.getPlayer().getEventInstance() != null) {
        cm.gainExp_PQ(70, 1);
        cm.getPlayer().modifyCSPoints(1, 1000);
        if (cm.canHold(4001529, 1)) {
            cm.gainItem(4001529, 1)
        }
    }
    cm.warp(932000000, 0)
};