function start() {
    var a = cm.getEventManager("CWKPQ");
    if (a != null) {
        if (!a.getProperty("glpq3").equals("10")) {
            cm.playerMessage("The portal is not opened yet.")
        } else {
            cm.warp(610030400, 0)
        }
    }
};