function start() {
    var a = cm.getEventManager("组队任务_罗朱");
    if (a != null && a.getProperty("stage1").equals("1")) {
        cm.warp(926110001, 0, false)
    } else {
        cm.playerMessage(5, "实验室入口的大门是关闭的!")
    }
};