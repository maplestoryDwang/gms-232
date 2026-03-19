function start() {
    if (cm.getQuestStatus(2601) == 2) {
        cm.warp(103050920, 1)
    } else {
        cm.playerMessage(5, "You must accept the quest before proceeding to the next map.")
    }
};