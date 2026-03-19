function start() {
    if (cm.getMap().getForcedReturnId() == 999999999) {
        cm.warp(910000000, 0)
    } else {
        cm.warp(cm.getMap().getForcedReturnId())
    }
};