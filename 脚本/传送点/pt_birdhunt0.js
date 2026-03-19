function start() {
    if (cm.isQuestActive(33165) || cm.getQuestStatus(33165) == 2) {
        cm.warp(350020110, 1)
    } else {
        cm.playerMessage(-1, "接受任务再进去吧！")
    }
};