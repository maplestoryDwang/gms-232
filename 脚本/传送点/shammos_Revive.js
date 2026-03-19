function start() {
    if (cm.getPlayer().getEventInstance() != null) {
        cm.gainExp_PQ(60, 1.5);
        cm.addTrait("意志", 15);
        cm.addTrait("洞察力", 3);
        if (cm.canHold(4001530, 1)) {
            cm.gainItem(4001530, 1)
        }
    }
    cm.warp(211000002, 0)
};