function start() {
    if (cm.getMap().getNumMonsters() <= 0) {
        var a = cm.getMapId();
        if (a == 306020100) {
            cm.warp(306020200, 1, false)
        } else {
            if (a == 306020200) {
                cm.warp(306020300, 1, false)
            } else {
                cm.forceStartQuest(32681, "");
                cm.updateInfoQuest(32681, "enter=1");
                cm.warp(306020400, 0, false)
            }
        }
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。");
        cm.playerMessage(-1, "还有怪物没有消灭干净。")
    }
};