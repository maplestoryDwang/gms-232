var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            switch (cm.getMapId()) {
                case 923040100:
                    cm.npc_ChangeController(9020004, 200, 1800, 1);
                    var e = em.getMapFactoryMap(cm.getMapId());
                    var d = em.getMonster(9300460);
                    d.setOverrideStats();
                    d.getChangedStats().hp = cm.getLevel() * 1000;
                    d.heal();
                    e.spawnMonsterOnGroundBelow(d, new java.awt.Point(213, 1810));
                    cm.getMap().startSimpleMapEffect("无名的绅士！你快来，帮我把这些烦人的家伙收拾掉。", 5120118);
                    cm.showMapEffect(true, 5120052, "你能听见我的声音吗？请帮帮我！！我在受难船附近……", 10, false);
                    break;
                case 923040200:
                    var e = em.getMapFactoryMap(cm.getMapId());
                    var d = em.getMonster(9300460);
                    d.setOverrideStats();
                    d.getChangedStats().hp = cm.getLevel() * 1000;
                    d.heal();
                    e.spawnMonsterOnGroundBelow(d, new java.awt.Point(432, 1750));
                    cm.getMap().startSimpleMapEffect("无名的绅士！你快来，帮我把这些烦人的家伙收拾掉。", 5120118);
                    cm.showMapEffect(true, 5120052, "你能听见我的声音吗？请帮帮我！！我在受难船附近……", 10, false);
                    break;
                case 923040300:
                    cm.showMapEffect(true, 5120052, "你能听见我的声音吗？请帮帮我！！我在受难船附近……", 10, false);
                    break;
                case 923040400:
                    cm.showMapEffect(true, 5120052, "你能听见我的声音吗？请帮帮我！！我在受难船附近……", 10, false);
                    break;
                default:
                    break
            }
            cm.dispose()
        }
    }
};