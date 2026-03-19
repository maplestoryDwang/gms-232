function start() {
    if (!cm.haveItem(4032246)) {
        cm.playerMessage(5, "你没有梦幻主题公园魂魄。")
    } else {
        if (cm.getPlayerCount(551030200) <= 0) {
            var a = cm.getMap(551030200);
            a.resetReactors();
            a.killAllMonsters(false);
            cm.warp(551030200, "sp")
        } else {
            if (cm.getMap(551030200).getNumMonsters() <= 0) {
                cm.warp(551030200, "sp")
            } else {
                cm.playerMessage(5, "对抗怪物的挑战已经开始了，你不能进去。")
            }
        }
    }
};