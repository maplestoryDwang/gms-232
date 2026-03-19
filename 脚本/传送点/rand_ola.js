function start() {
    if (cm.getEvent("OlaOla").isRunning() && cm.getEvent("OlaOla").isCharCorrect(cm.getPortal().getName(), cm.getMapId())) {
        cm.warp(cm.getMapId() == 109030003 ? 109050000 : (cm.getMapId() + 1), 0)
    } else {
        cm.warp(cm.getMapId(), 0)
    }
};