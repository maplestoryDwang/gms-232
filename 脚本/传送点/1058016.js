function act() {
    var b = cm.getEventInstance();
    if (b != null) {
        var a = b.getEventManager();
        var c = a.getMonster(8910100);
        b.registerMonster(c);
        var d = b.getMapInstance(0);
        d.spawnMonsterOnGroundBelow(c, new java.awt.Point(-131, 455))
    }
};