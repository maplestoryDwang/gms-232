function start() {
    var a = cm.getSavedLocation("BPReturn");
    if (a == 950000100) {
        a = 262010000
    } else {
        cm.clearSavedLocation("BPReturn")
    }
    cm.warp(a, 0)
};