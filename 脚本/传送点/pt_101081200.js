function start() {
    var c = cm.getMapId();
    var b = c == 101081000 ? 101080900 : 101081300;
    var a = c == 101081000 ? 2 : 1;
    cm.warp(b, a)
};