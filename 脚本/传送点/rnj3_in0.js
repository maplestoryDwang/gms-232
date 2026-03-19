function start() {
    if (cm.getMap().getReactorByName("rnj3_out1").getState() > 0) {
        cm.warp(926100201, 0)
    } else {
        cm.playerMessage(5, "The portal has not opened yet.")
    }
};