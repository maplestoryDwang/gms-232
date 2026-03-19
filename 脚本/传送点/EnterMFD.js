function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestFinished(33530)) {
        cm.openNpc("副本_好友故事_旧楼")
    } else {
        cm.warp(330000640, 0)
    }
};