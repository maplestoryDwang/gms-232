function start() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.openNpc(9131010)
    } else {
        cm.topMsg("打倒所有的敌方阴阳师吧！")
    }
};