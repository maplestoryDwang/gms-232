function start() {
    if (cm.getPlayerStat("LVL") <= 30) {
        cm.warp(990000640, 1);
        return true
    } else {
        cm.playerMessage("未知的力量阻挡着你的前进。");
        return false
    }
};