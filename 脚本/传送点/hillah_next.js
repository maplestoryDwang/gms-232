function start() {
    var a = cm.getMapId();
    var b = Math.floor(a % 10000 / 1000);
    if (cm.getPlayer().getParty() != null && cm.getMap().getNumMonsters() == 0) {
        if (eim.getNumberProperty("clear_" + (a % 1000)) > 0) {
            cm.warpParty(a + 100)
        } else {
            if (a % 1000 == 1) {
                cm.spawnMobLimit(8870003 + b * 100, 1, 777, 196, 100);
                cm.spawnMobLimit(8870003 + b * 100, 1, 777, 196, 100);
                cm.spawnMobLimit(8870003 + b * 100, 1, 777, 196, 100);
                cm.playerMessage(-1, "血牙发现了我们的入侵！！！请消灭血牙。");
                eim.setProperty("clear_" + (a % 1000), 1)
            } else {
                cm.spawnMobLimit(8870004 + b * 100, 1, 777, 196, 100);
                cm.spawnMobLimit(8870004 + b * 100, 1, 777, 196, 100);
                cm.spawnMobLimit(8870004 + b * 100, 1, 777, 196, 100);
                cm.playerMessage(-1, "血牙发现了我们的入侵！！！请消灭血牙。");
                eim.setProperty("clear_" + (a % 1000), 1)
            }
        }
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净！");
        cm.playerMessage(-1, "还有怪物没有消灭干净！")
    }
};