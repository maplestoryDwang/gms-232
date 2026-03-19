function start() {
    if (cm.getMap().getNumMonsters() <= 0) {
        var a = cm.getMapId();
        if (a == 306010400) {
            cm.warp(306010500, 3, false)
        } else {
            if (a == 306010500) {
                cm.warp(306010600, 1, false)
            } else {
                if (a == 306010600) {
                    cm.warp(306010700, 2, false)
                } else {
                    if (a == 306010700) {
                        cm.forceCompleteQuest(32679);
                        cm.gainExp(186336);
                        cm.warp(306010800, 0, false)
                    }
                }
            }
        }
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。");
        cm.playerMessage(-1, "还有怪物没有消灭干净。")
    }
};