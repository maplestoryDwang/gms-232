function start() {
    if (java.lang.Math.floor(((cm.getPlayer().getJob() % 1000) / 100) * 100 - (cm.getPlayer().getJob() % 100)) == 500) {
        cm.warp(610030550, 0)
    } else {
        cm.playerMessage(5, "Only pirates may enter this portal.")
    }
};