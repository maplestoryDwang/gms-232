function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getQuestStatus(34801) == 1) {
        cm.warp(940202013)
    } else {
        cm.playerMessage(5, "请先接受任务.")
    }
};