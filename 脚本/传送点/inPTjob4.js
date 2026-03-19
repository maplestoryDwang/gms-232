function start() {
    if (cm.getQuestStatus(25121) == 1 || cm.getQuestStatus(29970) == 2 || cm.getQuestStatus(25121) == 2) {
        cm.warp(915010200, "out00")
    }
    if (cm.isQuestActive(38053)) {
        cm.warp(915020200, 1, false)
    }
};