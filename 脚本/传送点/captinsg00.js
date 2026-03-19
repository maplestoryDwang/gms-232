function start() {
    if (!cm.haveItem(4000381)) {
        cm.playerMessage(5, "你没有白色的精华，不能进去。")
    } else {
        if (cm.getPlayerCount(541010100) <= 0) {
            var a = cm.getMap(541010100);
            a.resetFully();
            cm.warp(541010100, "sp")
        } else {
            if (cm.getMap(541010100).getSpeedRunStart() == 0 && (cm.getMap(541010100).getNumMonsters() <= 0 || cm.getMap(541010100).isDisconnected(cm.getPlayer().getId()))) {
                cm.warp(541010100, "sp")
            } else {
                cm.playerMessage(5, "对抗BOSS已经开始了，你不能进去。")
            }
        }
    }
};