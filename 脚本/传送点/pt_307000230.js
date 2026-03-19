function start() {
    if (cm.isQuestActive(32984)) {
        cm.warp(307000300, 1)
    } else {
        cm.sendNormalTalk_Bottom("（好像还有别的事要做……）", 57, 0, false, true)
    }
};