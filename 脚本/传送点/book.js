function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestFinished(62020)) {
        if (cm.haveItem(4034637)) {
            cm.playerMessage(5, "已经找到了#t4034637#，快回去交给方丈吧。")
        } else {
            cm.openNpc(2, "少林寺藏经阁_传送点提示")
        }
    }
};