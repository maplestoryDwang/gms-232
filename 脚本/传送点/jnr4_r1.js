function start() {
    var a = cm.getEventManager("Juliet");
    if (a != null && a.getProperty("stage6_0").equals("0")) {
        cm.warp(926110301, 0);
        a.setProperty("stage6_0", "1")
    } else {
        cm.playerMessage(5, "Someone has already gone in this portal.")
    }
};