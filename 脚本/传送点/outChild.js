function start() {
    if (cm.getQuestStatus(21001) == 0) {
        cm.warp(914000220, 2)
    } else {
        cm.warp(914000400, 2)
    }
};