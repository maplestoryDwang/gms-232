function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(62015)) {
        cm.warp(701210131, 0)
    } else {
        cm.playerMessage(5, "不知道通往何处。还是不要乱闯好了。")
    }
};