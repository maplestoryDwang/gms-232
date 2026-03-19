function start() {
    if (java.lang.Math.floor(((cm.getPlayer().getJob() % 1000) / 100) * 100 - (cm.getPlayer().getJob() % 100)) == 400) {
        cm.warp(610030530, 0)
    } else {
        cm.playerMessage(5, "Only thieves may enter this portal.")
    }
};