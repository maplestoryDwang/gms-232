function start() {
    var a = cm.getMapId();
    if (cm.getMap(a).getNumMonsters() == 0) {
        cm.warp(141050200, 2)
    } else {
        cm.playerMessage(5, "还有敌人在场地里，无法安全地离开。")
    }
    return true
};