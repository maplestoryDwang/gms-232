function start() {
    if (!cm.isQuestActive(32981) && !cm.isQuestFinished(32981)) {
        cm.sendNormalTalk_Bottom("（好像还有别的事要做……）", 57, 0, false, true);
        return
    }
    cm.warp(307000230, 1)
};