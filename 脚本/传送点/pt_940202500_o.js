function start() {
    if (cm.getMap().getNumMonsters() > 0) {
        cm.playerMessage(-1, "必须消灭掉所有怪物，继续向前进。");
        cm.playerMessage(5, "剩余怪物数量：" + cm.getMap().getNumMonsters() + "");
        return
    } else {
        cm.warp(940202600, 0)
    }
};