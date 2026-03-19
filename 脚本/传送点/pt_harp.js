function start() {
    if ((cm.isQuestFinished(34466) && !cm.isQuestActive(34467) && !cm.isQuestActive(34468)) && !cm.isQuestFinished(34468)) {
        cm.warp(940200218, 0)
    } else {
        if (cm.isQuestActive(34467) || cm.getQuestStatus(34468) > 0 || cm.isQuestActive(34469)) {
            cm.warp(940200216, 1, true)
        } else {
            cm.playerMessage(-1, "这里好像什么都没有。.")
        }
    }
};