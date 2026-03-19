function start() {
    var a = cm.getEventManager("CWKPQ");
    if (a != null) {
        cm.warp(610030300, 0);
        if (!a.getProperty("glpq3").equals("10")) {
            a.setProperty("glpq3", parseInt(a.getProperty("glpq3")) + 1);
            cm.mapMessage(6, "An adventurer has passed through!");
            if (a.getProperty("glpq3").equals("10")) {
                cm.mapMessage(6, "The Antellion grants you access to the next portal！Proceed!");
                cm.fieldEffect_SetObjectState("3pt")
            }
        }
    }
};