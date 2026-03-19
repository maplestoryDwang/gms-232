function start() {
    if (!cm.isQuestActive(34600)) {
        cm.playerMessage(-1, "接受任务再进去吧!");
        return
    }
    cm.warp(940200501, 0)
};