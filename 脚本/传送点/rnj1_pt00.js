function start() {
    var a = cm.getEventManager("Romeo");
    if (a != null && a.getProperty("stage1").equals("1")) {
        cm.warp(926100001, 0)
    } else {
        cm.playerMessage(5, "The portal has not opened yet.")
    }
};