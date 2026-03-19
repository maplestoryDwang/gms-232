function start() {
    if (cm.getMap().getNumMonsters() == 0) {
        var a = cm.getMapId();
        if (a == 701220410) {
            cm.warp(701220510, 0)
        } else {
            if (a == 701220510) {
                cm.warp(701220600, 0)
            } else {
                if (a == 701220601) {
                    cm.warp(701220610, 0)
                } else {
                    cm.dispose()
                }
            }
        }
    } else {
        cm.playerMessage(5, "必须消灭区域内的所有怪物，才能移动至上层。");
        cm.playerMessage(-1, "必须消灭区域内的所有怪物，才能移动至上层。")
    }
};