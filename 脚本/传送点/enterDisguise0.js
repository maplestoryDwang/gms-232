function start() {
    if (cm.getJob() >= 1000) {
        if (cm.haveItem(4032179)) {
            cm.playerMessage("The erev search begins.")
        }
        cm.warp(130010000, 3)
    } else {
        cm.playerMessage("Only the knights of Cygnus may enter.")
    }
};