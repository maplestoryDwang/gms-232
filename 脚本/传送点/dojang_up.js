function start() {
    if (cm.getMap().getNumMonsters() > 0) {
        cm.playerMessage("还有剩下的怪物。")
    } else {
        if (cm.getMapId() == 925070000) {
            cm.warp(925070100, 4, false)
        } else {
            if (eim.getNumberProperty("pause") > 0) {
                eim.restartEventTimer(cm.getNumberFromQuestInfo(3849, "time"), false);
                eim.setProperty("pause", 0)
            }
            cm.dojoAgent_NextMap()
        }
    }
};