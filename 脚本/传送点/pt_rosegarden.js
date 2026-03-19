function start() {
    if (cm.isQuestFinished(3178)) {
        cm.warp(211080000, 0)
    } else {
        cm.playerMessage(5, "没有得到许可还是不要乱闯的好。")
    }
    return true
};