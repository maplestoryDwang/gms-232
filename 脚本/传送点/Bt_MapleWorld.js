function start() {
    var a = cm.getSavedLocation("STAR_PLANET");
    cm.clearSavedLocation("STAR_PLANET");
    if (a < 0) {
        a = 100000000
    }
    cm.getPlayer().changeMap(a, 0)
};