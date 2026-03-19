function start() {
    var a = cm.getEventManager("组队任务_罗朱");
    if (a != null && a.getProperty("stage10").equals("1")) {
        cm.warp(926110203, 0)
    } else {
        cm.playerMessage(5, "实验室大门是关闭的!")
    }
};