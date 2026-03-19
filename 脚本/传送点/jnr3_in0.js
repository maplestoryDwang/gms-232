function start() {
    if (cm.getMap().getReactorByName("jnr3_out1").getState() > 0) {
        cm.warp(926110201, 0)
    } else {
        cm.playerMessage(5, "实验室大门是关闭的!")
    }
};