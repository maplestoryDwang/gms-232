function start() {
    if (cm.getMap().getReactorByName("secretgate3").getState() == 1) {
        cm.warp(990000641, 1);
        return true
    } else {
        cm.playerMessage("这个门是关闭的。");
        return false
    }
};