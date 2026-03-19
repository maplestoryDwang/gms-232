function start() {
    if (!cm.isQuestActive(32974)) {
        cm.sendNormalTalk_Bottom("（好像还有别的事要做……）", 57, 0, false, true);
        return
    }
    cm.warp(307000130, 1);
    cm.getPlayer().scheduleWarpTask(1 * 60 * 10, cm.getMap(307000110))
};