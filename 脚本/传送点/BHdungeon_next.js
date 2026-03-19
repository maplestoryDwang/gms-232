function start() {
    if (cm.getMap().getNumMonsters() == 0) {
        var a = cm.getMapId();
        if (a == 350011300) {
            cm.warp(350011800, 0, false)
        } else {
            cm.warp(cm.getMapId() + 100, 0, false)
        }
    } else {
        cm.getTopMsgFont("怪物太多了走不掉.", 3, 20, 20, 0)
    }
};