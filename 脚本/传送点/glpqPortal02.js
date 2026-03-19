function start() {
    if (java.lang.Math.floor(((cm.getPlayer().getJob() % 1000) / 100) * 100 - (cm.getPlayer().getJob() % 100)) == 200 || java.lang.Math.floor(((cm.getPlayer().getJob() % 1000) / 100) * 100 - (cm.getPlayer().getJob() % 100)) == 199) {
        cm.warp(610030521, 0)
    } else {
        cm.playerMessage(5, "Only mages may enter this portal.")
    }
};