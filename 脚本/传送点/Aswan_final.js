function start() {
    if (cm.getPlayer().getParty() != null && cm.getPlayer().getParty() != null && cm.getMap().getNumMonsters() == 0 && cm.isLeader()) {
        cm.warpParty(262030100)
    }
};