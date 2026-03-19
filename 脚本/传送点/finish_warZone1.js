function start() {
    if (cm.getMap().getNumMonsters() == 0) {
        if (cm.getMapId() == 401070000) {
            cm.forceStartQuest(31803, "1");
            cm.warp(401000000, 1, false)
        } else {
            if (cm.getMapId() == 401070200) {
                cm.forceStartQuest(31807, "1");
                cm.warp(401000000, 1, false)
            } else {
                if (cm.getMapId() == 401070900) {
                    cm.forceStartQuest(31831, "1");
                    cm.warp(401100500, 0, false)
                } else {
                    cm.warp(cm.getMapId() + 100, 0, false)
                }
            }
        }
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。");
        cm.playerMessage(-1, "还有怪物没有消灭干净。")
    }
};