function start() {
    var a = cm.getNumberFromQuestInfo(64085, "dir");
    if (a >= 2) {
        cm.forceStartQuest(64086, "");
        cm.warp(867201810, 0)
    } else {
        cm.sendNormalTalk_Bottom("#b先看看屋里的情况吧，不急着离开。", 57, 0, false, true)
    }
};