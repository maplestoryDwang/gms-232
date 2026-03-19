function start() {
    if (cm.getMapId() == 401070000) {
        cm.warp(401000002, 2, false)
    } else {
        if (cm.getMapId() >= 401070100 && cm.getMapId() <= 401070200) {
            cm.warp(401000000, 0, false)
        } else {
            cm.warp(401000000, 0, false)
        }
    }
};