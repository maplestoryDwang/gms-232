function start() {
    if (cm.getMap().getNumMonsters() <= 0) {
        cm.warp(cm.getMapId() + 50, 0)
    } else {
        cm.playerMessage(-1, " 暂时无法离开梦境。");
        cm.effect_NormalSpeechBalloon("必须击杀路西德", 1, 0, 0, 3000, 0, 0)
    }
};