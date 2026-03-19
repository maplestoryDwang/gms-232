function start() {
    var a = cm.getEventManager("Juliet");
    if (a != null && a.getProperty("stage6_" + (((cm.getMapId() % 10) | 0) - 1) + "_" + (cm.getPortal().getName().substring(2, 3)) + "_" + (cm.getPortal().getName().substring(3, 4)) + "").equals("1")) {
        cm.warp(cm.getMapId(), (cm.getPortal().getId() >= 31 ? (cm.isGMS() ? 35 : 13) : (cm.getPortal().getId() + 4)));
        cm.playerMessage(-1, "Correct combination!");
        if (cm.isGMS()) {
            cm.fieldEffect_SetObjectState("an" + cm.getPortal().getName().substring(2, 4))
        }
    } else {
        cm.warp(cm.getMapId(), (cm.getPortal().getId() <= 4 ? (cm.isGMS() ? 13 : 0) : (cm.getPortal().getId() - 4)));
        cm.playerMessage(-1, "Incorrect combination.")
    }
};