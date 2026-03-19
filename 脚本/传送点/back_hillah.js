function start() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.warp(cm.getMapId() - 10, 0)
    } else {
        cm.playerMessage("Empress blocks you from the portal.")
    }
};