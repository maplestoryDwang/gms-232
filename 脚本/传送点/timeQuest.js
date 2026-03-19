function start() {
    var a = cm.getPlayer().getMapId();
    var b = a / 100 % 10 == 5 ? a + 9500 : a + 100;
    if (cm.getPlayer().getMapId() != 270040100) {
        cm.warp(b, "out00");
        return true
    } else {
        cm.warp(270050000, 0);
        return true
    }
};