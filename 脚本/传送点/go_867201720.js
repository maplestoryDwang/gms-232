function start() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.warp(867201740, 0)
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。")
    }
};