function start() {
    if (cm.getQuestStatus(20754) == 1) {
        cm.warp(913060000, "out00");
        return
    }
    if (cm.getQuestStatus(20320) == 1) {
        cm.warp(913070200, 1);
        return
    }
    if (cm.getQuestStatus(20411) == 1) {
        cm.warp(913070100, 1);
        return
    }
};