function start() {
    try {
        if (cm.getPlayer().getParty() != null && cm.getMap().getMonsterById(9300438) == null && cm.isLeader()) {
            cm.warpParty(((cm.getPlayer().getMapId() / 100) + 1) * 100 - (cm.getPlayer().getMapId() % 100))
        } else {
            cm.playerMessage(5, "Please get the leader in this portal, and make sure Ice Knight is here.")
        }
    } catch (a) {
        cm.playerMessage(5, "Error: " + a)
    }
};