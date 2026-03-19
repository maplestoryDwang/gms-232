function start() {
    if (cm.getMap().getNumMonsters() == 0) {
        var a = cm.getMapId();
        cm.warp(a + 100, 0, true)
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。");
        cm.playerMessage(-1, "还有怪物没有消灭干净。")
    }
};