function start() {
    var a = cm.getEventManager("CWKPQ");
    if (a != null) {
        if (a.getProperty("glpq1").equals("1")) {
            a.setProperty("glpq1", "2");
            cm.warp(cm.getMapId(), 0);
            cm.mapMessage("[Expedition] An adventurer has passed through the portal!")
        } else {
            if (a.getProperty("glpq1").equals("2")) {
                cm.warp(610030200, 0)
            } else {
                cm.playerMessage(5, "Please make sure the leader has briefed Jack first about the situation!")
            }
        }
    }
};