function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestFinished(33524)) {
        cm.warp(330002623, 0)
    } else {
        cm.getTopMsgFont("还不是入场的时候。", 3, 20, 20, 0)
    }
};