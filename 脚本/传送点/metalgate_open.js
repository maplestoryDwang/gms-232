function start() {
    if (cm.getMap().getReactorByName("metalgate").getState() == 1) {
        cm.warp(990000431, 0)
    } else {
        cm.playerMessage("This way forward is not open yet.")
    }
};