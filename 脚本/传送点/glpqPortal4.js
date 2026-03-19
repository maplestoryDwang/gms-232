function start() {
    var a = cm.getEventManager("CWKPQ");
    if (a != null) {
        if (!a.getProperty("glpq4").equals("5")) {
            cm.playerMessage("The portal is not opened yet.")
        } else {
            cm.warp(610030500, 0)
        }
    }
};