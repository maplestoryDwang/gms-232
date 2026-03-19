function start() {
    var c = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    var b = cm.getMapId();
    if (b == 330000801) {
        cm.warp(330000800, 3)
    } else {
        if (b == 330000701) {
            cm.warp(330000700, 2)
        } else {
            if (b == 330000901) {
                cm.warp(330000900, 1)
            }
        }
    }
};