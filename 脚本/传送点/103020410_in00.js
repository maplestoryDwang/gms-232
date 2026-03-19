function start() {
    if (!cm.isQuestActive(2866)) {
        cm.warp(103020420, 0)
    } else {
        cm.forceCompleteQuest(2866);
        cm.warp(103020420, 0);
        cm.getPlayer().scheduleWarpTask(1 * 1 * 10, cm.getMap(103000000))
    }
};