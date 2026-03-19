function start() {
    if (!cm.isQuestFinished(32633)) {
        cm.playerMessage(-1, "现在不是进入这里的时候。")
    } else {
        if (cm.getNumberFromQuestInfo(32628, "arin") == 1) {
            cm.warp(302020400, 1, false)
        } else {
            cm.warp(302090200, 0)
        }
    }
};