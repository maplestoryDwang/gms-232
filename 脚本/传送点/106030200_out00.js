function start() {
    if (cm.isQuestFinished(30056)) {
        cm.warp(106030300, 1)
    } else {
        cm.playerMessage(5, "门似乎锁上了。没有允许还是不要乱闯的好。")
    }
    return true
};