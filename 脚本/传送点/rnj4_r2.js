function start() {
    var a = cm.getEventManager("Romeo");
    if (a != null && a.getProperty("stage6_1").equals("0")) {
        cm.warp(926100302, 0);
        a.setProperty("stage6_1", "1")
    } else {
        cm.playerMessage(5, "Someone has already gone in this portal.")
    }
};