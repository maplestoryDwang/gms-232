function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getQuestStatus(34801) == 2) {
        cm.warp(940202019, 0)
    } else {
        cm.playerMessage(5, "请先完成部件收集任务,才可以离开哦!")
    }
};