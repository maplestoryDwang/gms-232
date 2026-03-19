function start() {
    if (java.lang.Math.floor(((cm.getPlayer().getJob() % 1000) / 100) * 100 - (cm.getPlayer().getJob() % 100)) == 300) {
        cm.warp(610030540, 0)
    } else {
        cm.playerMessage(5, "Only bowmen may enter this portal.")
    }
};