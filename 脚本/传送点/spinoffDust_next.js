function start() {
    var a = cm.getMapId();
    if (cm.getMap().getNumMonsters() == 0) {
        cm.warp(a + 100, 0)
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。");
        cm.playerMessage(-1, "还有怪物没有消灭干净。")
    }
};