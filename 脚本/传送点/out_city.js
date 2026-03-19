function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getQuestStatus(32700) == 0) {
        cm.playerMessage(5, "先了解下这里的情况吧。")
    } else {
        if (cm.isQuestActive(32709)) {
            cm.warp(330002050, 0)
        } else {
            cm.warp(330000000, 1)
        }
    }
};