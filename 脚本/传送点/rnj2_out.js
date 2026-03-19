function start() {
    var a = cm.getEventManager("Romeo");
    if (a != null && a.getProperty("stage3").equals("3")) {
        cm.warp(926100200, 0)
    } else {
        cm.playerMessage(5, "The portal has not opened yet.")
    }
};