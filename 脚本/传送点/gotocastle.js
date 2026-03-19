function start() {
    if (cm.isQuestActive(2324)) {
        cm.forceCompleteQuest(2324);
        cm.removeAll(2430015);
        cm.playerMessage("Quest complete.")
    }
    cm.warp(106020501, 0);
    return true
};