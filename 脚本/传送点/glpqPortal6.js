function start() {
    try {
        var a = cm.getEventManager("CWKPQ");
        if (a != null) {
            if (a.getProperty("glpq6") == null || !a.getProperty("glpq6").equals("3") || cm.getPlayer().getEventInstance() == null || !cm.getPlayer().getEventInstance().getName().startsWith("CWKPQ")) {
                cm.playerMessage("The portal is not opened yet.")
            } else {
                cm.warp(610030700, 0)
            }
        }
    } catch (b) {
        cm.playerMessage("Error: " + b)
    }
};