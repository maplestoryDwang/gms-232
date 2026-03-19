function start() {
    var a = cm.getSavedLocation("MULUNG_TC");
    if (a == 950000100) {
        a = 103000000
    }
    cm.clearSavedLocation("MULUNG_TC");
    cm.warp(a, 0);
    return true
};