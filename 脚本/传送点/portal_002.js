function start() {
    if (cm.getMap().getNumMonsters() < 1) {
        cm.enableActions();
        cm.spawnMonster(9001050, 10, 235, 65)
    }
};