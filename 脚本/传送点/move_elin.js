function start() {
    cm.playerMessage(5, "移动到时间之门的另一端。");
    cm.warp(300000100, "out00");
    if (cm.isQuestActive(31200)) {
        cm.forceCompleteQuest(31200)
    }
    return true
};