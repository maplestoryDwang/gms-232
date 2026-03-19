function start() {
    if (cm.isQuestActive(25111) && !cm.isQuestFinished(25112)) {
        cm.warp(915010100, 1)
    } else {
        if (cm.isQuestActive(38052)) {
            cm.warp(915020100, 1, false)
        } else {
            cm.getTopMsgFont("这里好像没有事情", 3, 20, 4, 0, 0)
        }
    }
};