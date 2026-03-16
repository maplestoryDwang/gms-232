function start() {
    var b = cm.getEventInstance();
    var a = cm.getEventManager("Bosszhizhuwang");
    if (b != null && b.getProperty("summom").equals("0")) {
        b.setProperty("summom", "1");
        mobid = 8800400;
        mob = a.getMonster(mobid);
        b.registerMonster(mob);
        cm.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(179, 97));
        cm.getMap().startMapEffect("请在规定的时间内击败.", 5120124)
    }
    cm.dispose()
}
var status = -1;