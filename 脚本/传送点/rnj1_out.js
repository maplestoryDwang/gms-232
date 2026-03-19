function start() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.warp(926100100, 0)
    } else {
        cm.playerMessage(5, "The portal has not opened yet.")
    }
};