function start() {
    if (cm.isQuestFinished(20407)) {
        cm.warp(924010200, 0)
    } else {
        if (cm.isQuestFinished(20406)) {
            cm.warp(924010100, 0)
        } else {
            if (cm.isQuestFinished(20404)) {
                cm.warp(924010000, 0)
            } else {
                cm.playerMessage(5, "I shouldn't go here.. it's creepy!")
            }
        }
    }
};