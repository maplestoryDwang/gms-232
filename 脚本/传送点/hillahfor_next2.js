function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getInfoQuest(31057).contains("door=clear")) {
        cm.warp(926200002, 0)
    } else {
        cm.playerMessage(-1, "这里还没探索完全.");
        cm.playerMessage(5, "这里还没探索完全.")
    }
};