function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (!cm.isQuestFinished(34763)) {
        cm.playerMessage(-1, "这里是狐狸村的圣地，还是不要乱闯比较好。");
        cm.playerMessage(5, "这里是狐狸村的圣地，还是不要乱闯比较好。")
    } else {
        if (cm.isQuestFinished(34763) && !cm.isQuestFinished(34764)) {
            cm.warp(940204130, 0)
        } else {
            cm.warp(410000121, 1)
        }
    }
};