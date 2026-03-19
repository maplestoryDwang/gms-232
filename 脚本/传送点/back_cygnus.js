function start() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.warp(271040100, 0)
    } else {
        cm.playerMessage("希纳斯封锁着这个出口.")
    }
};