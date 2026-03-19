function start() {
    if (!cm.isQuestActive(32976)) {
        cm.playerMessage(-1, "接受任务再进去吧!");
        return
    }
    cm.warp(307000221, 1);
    cm.getPlayer().scheduleWarpTask(1 * 60 * 10, cm.getMap(307000220))
};