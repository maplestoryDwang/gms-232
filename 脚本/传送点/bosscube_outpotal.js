function start() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.warp(502029000, 0)
    } else {
        cm.playerMessage("The Ultimate Visitor blocks your way out.")
    }
};