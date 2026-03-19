function start() {
    var b = cm.getSavedLocation("BPReturn");
    var a = 0;
    if (b == 950000100) {
        b = 270000000;
        a = 6
    } else {
        cm.clearSavedLocation("BPReturn")
    }
    cm.warp(b, a)
};