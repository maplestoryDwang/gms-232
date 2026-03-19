function start() {
    var a = cm.getEventManager("CWKPQ");
    if (a != null) {
        if (!a.getProperty("glpq5").equals("5")) {
            cm.playerMessage("The portal is not opened yet.")
        } else {
            cm.removeAll(4001256);
            cm.removeAll(4001257);
            cm.removeAll(4001258);
            cm.removeAll(4001259);
            cm.removeAll(4001260);
            cm.warp(610030600, 0)
        }
    }
};