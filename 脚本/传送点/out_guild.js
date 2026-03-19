function start() {
    var a = cm.getSavedLocation("GUILD");
    cm.clearSavedLocation("GUILD");
    if (a < 0) {
        a = 200000300
    }
    cm.warp(a)
};