function start() {
    if (cm.getPlayerCount(541020800) <= 0) {
        var a = cm.getMap(541020800);
        a.resetFully();
        cm.warp(541020800, "sp");
        return true
    } else {
        if (cm.getMap(541020800).getSpeedRunStart() == 0 && (cm.getMap(541020800).getNumMonsters() <= 0 || cm.getMap(541020800).isDisconnected(cm.getPlayer().getId()))) {
            cm.warp(541020800, "sp");
            return true
        } else {
            cm.playerMessage(5, "对抗BOSS的挑战已经开始了，你不能进入到里面。");
            return false
        }
    }
};