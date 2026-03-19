function start() {
    var a = cm.getEventManager("CWKPQ");
    if (a != null) {
        if (a.getProperty("glpq2").equals("5")) {
            cm.warp(610030300, 0)
        } else {
            cm.playerMessage(5, "The portal has not been activated!")
        }
    }
};