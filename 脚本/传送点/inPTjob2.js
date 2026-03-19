function start() {
    if (cm.isQuestActive(25100) || cm.isQuestActive(25101)) {
        if (cm.isQuestActive(25100)) {
            cm.forceCompleteQuest(25100)
        }
        cm.warp(915010000, "out00")
    } else {
        if (cm.isQuestActive(38051)) {
            cm.warp(915020000, 2, false)
        } else {
            cm.playerMessage(5, "这里什么都没有。");
            cm.warp(910000000, "out00")
        }
    }
    return true
};