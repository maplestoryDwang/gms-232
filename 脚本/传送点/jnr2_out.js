function start() {
    var a = cm.getEventManager("组队任务_罗朱");
    if (a != null && a.getProperty("stage2").equals("3")) {
        cm.warp(926110200, 0)
    } else {
        cm.playerMessage(5, "实验室入口的大门是关闭的!")
    }
};