function start() {
    var a = cm.getEventManager("组队任务_罗朱");
    if (a != null && a.getProperty("stage4").equals("2")) {
        cm.warp(926110400, 0)
    } else {
        cm.playerMessage(5, "实验室大门是关闭的!")
    }
};