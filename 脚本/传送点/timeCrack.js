function start() {
    if (cm.getQuestStatus(31167) > 0 && !cm.isQuestFinished(31178)) {
        cm.warp(272000100, 1)
    } else {
        cm.warp(272020000, 0)
    }
    return true
};