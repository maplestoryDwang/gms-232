function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (!cm.isQuestFinished(34761)) {
        cm.playerMessage(-1, "上面是狐狸村的圣地，还是不要乱闯比较好。");
        cm.playerMessage(5, "上面是狐狸村的圣地，还是不要乱闯比较好。")
    } else {
        cm.warp(410000120, 0)
    }
};