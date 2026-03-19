function start() {
    if (cm.isQuestFinished(37159)) {
        cm.warp(101082000, 1)
    } else {
        if (cm.isQuestFinished(37158)) {
            cm.warp(910143003, 0)
        } else {
            cm.sendNormalTalk("屋里一片漆黑，好像什么人都没有。不能随便闯进别人的家里。", 2, 0, false, true)
        }
    }
    return true
};