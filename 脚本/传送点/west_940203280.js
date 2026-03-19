function start() {
    var c = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    var b = cm.getMapId();
    if (b == 940203280) {
        cm.warp(940203290, 5)
    } else {
        if (b == 940203290) {
            cm.warp(940203300, 5)
        } else {
            cm.warp(940203214, 0)
        }
    }
};