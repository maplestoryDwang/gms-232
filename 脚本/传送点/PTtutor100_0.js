function start() {
    if (cm.isQuestActive(25000) || cm.isQuestFinished(25000)) {
        cm.warp(915000200, 2)
    } else {
        cm.getPlayer().dropMessage(5, "请先完成对话.")
    }
};