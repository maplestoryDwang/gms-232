function start() {
    try {
        cm.warp(103000000, 0)
    } catch (a) {
        cm.playerMessage(5, "Error: " + a);
        a.printStackTrace()
    }
};