var status = -1;
var selectionLog = [];

function action(f, c, b) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.dispose();
            var e = em.getMapFactoryMap(cm.getMapId());
            var d = em.getMonster(8230000);
            d.setOverrideStats();
            d.getChangedStats().hp = cm.getLevel() * 1000;
            d.heal();
            e.spawnMonsterOnGroundBelow(d, new java.awt.Point(-1669, 245));
            cm.getMap().startSimpleMapEffect("无名的绅士！你快来，帮我把这些烦人的家伙收拾掉。", 5120118);
            cm.spawnMobSchedule(8230002, 3, -926, 138, 5000);
            cm.spawnMobSchedule(8230002, 3, 33, 89, 10000);
            cm.spawnMobSchedule(8230001, 4, -351, 245, 15000);
            cm.spawnMobSchedule(8230001, 4, -672, 245, 20000);
            cm.spawnMobSchedule(8230001, 5, -1221, 245, 25000);
            cm.spawnMobSchedule(8230002, 5, -714, 186, 30000);
            cm.spawnMobSchedule(8230001, 6, 747, 245, 35000);
            cm.spawnMobSchedule(8230001, 6, 277, 245, 40000)
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};