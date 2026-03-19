function start() {
    var a = cm.getEventManager("Romeo");
    if (a != null && a.getProperty("stage4").equals("2")) {
        cm.warp(926100203, 0)
    } else {
        cm.playerMessage(5, "The portal has not opened yet.")
    }
};