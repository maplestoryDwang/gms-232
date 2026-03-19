function start() {
    if (cm.getMap().getNumMonsters() == 0) {
        if (cm.getMapId() == 811000100) {
            cm.openNpc(9000428)
        } else {
            if (cm.getMapId() == 811000200) {
                cm.warp(811000100, 12, false)
            } else {
                if (cm.getMapId() == 811000300) {
                    cm.warp(811000200, 2, false)
                } else {
                    if (cm.getMapId() == 811000400) {
                        cm.warp(811000300, 2, false)
                    } else {
                        cm.warp(811000400, 2, false)
                    }
                }
            }
        }
    } else {
        cm.playerMessage(-1, "还有怪物没有消灭干净。");
        cm.playerMessage(5, "还有怪物没有消灭干净。")
    }
};