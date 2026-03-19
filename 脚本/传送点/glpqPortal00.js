function start() {
    if (java.lang.Math.floor(((cm.getPlayer().getJob() % 1000) / 100) * 100 - (cm.getPlayer().getJob() % 100)) == 100) {
        cm.warp(610030510, 0)
    } else {
        cm.playerMessage(5, "Only warriors may enter this portal.")
    }
};