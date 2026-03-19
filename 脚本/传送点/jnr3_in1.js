function start() {
    if (cm.getMap().getReactorByName("jnr3_out2").getState() > 0) {
        cm.warp(926110202, 0)
    } else {
        cm.playerMessage(5, "实验室大门是关闭的!")
    }
};