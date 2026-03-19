function start() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.warp(cm.getMapId() + 100, 0)
    } else {
        cm.playerMessage(-1, "必须消灭区域内的所有怪物才能移动到下一回合。");
        cm.playerMessage(5, "必须消灭区域内的所有怪物才能移动到下一回合。")
    }
};