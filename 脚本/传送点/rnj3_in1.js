function start() {
    if (cm.getMap().getReactorByName("rnj3_out2").getState() > 0) {
        cm.warp(926100202, 0)
    } else {
        cm.playerMessage(5, "The portal has not opened yet.")
    }
};