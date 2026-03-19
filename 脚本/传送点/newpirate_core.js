function start() {
    if (cm.getQuestStatus(53253) == 1) {
        cm.openNpc(2111007)
    } else {
        cm.warp(240000000)
    }
};