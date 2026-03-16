var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
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
                case 931050413:
                    cm.spawnMobLimit(9300475, 1, 25, 972, 100);
                    cm.spawnMobLimit(9300520, 1, 3, 972, 100);
                    break;
                case 931050415:
                    cm.spawnMobLimit(9300477, 1, 433, 275, 100);
                    cm.spawnMobLimit(9300520, 1, 538, 275, 100);
                    break;
                case 931050417:
                    cm.spawnMobLimit(8090000, 1, -55, 167, 100);
                    cm.spawnMobLimit(9300520, 1, -119, 167, 100);
                    break;
                case 931050418:
                    cm.spawnMobLimit(9300478, 1, 542, 171, 100);
                    cm.spawnMobLimit(9300520, 1, 322, 171, 100);
                    break;
                case 931050419:
                    cm.spawnMobLimit(9300479, 1, 1821, 332, 100);
                    cm.spawnMobLimit(9300520, 1, 1916, 332, 100);
                    break;
                case 931050420:
                    cm.spawnMobLimit(9300480, 1, 288, 422, 100);
                    cm.spawnMobLimit(9300520, 1, 528, 422, 100);
                    break;
                case 931050422:
                    cm.spawnMobLimit(9300482, 1, 534, 422, 100);
                    cm.spawnMobLimit(9300484, 1, 853, 422, 100);
                    break;
                case 931050424:
                    cm.spawnMobLimit(9300510, 1, -308, -405, 100);
                    cm.spawnMobLimit(9300520, 1, -304, -405, 100);
                    if (cm.isQuestActive(1627)) {
                        cm.npc_ChangeController(9073022, "oid=3016513", -300, -425, 3, -350, -250, 1, false, 0, false);
                        cm.npc_SetSpecialAction("oid=3016513", "summon", 0, 0)
                    }
                    break;
                case 931050425:
                    cm.spawnMobLimit(9300511, 1, -29, 452, 100);
                    cm.spawnMobLimit(9300520, 1, 500, 452, 100);
                    break;
                case 931050426:
                    cm.spawnMobLimit(9300512, 1, -21, 452, 100);
                    cm.spawnMobLimit(9300520, 1, -94, 452, 100);
                    break;
                case 931050427:
                    cm.spawnMobLimit(9300513, 1, -269, -386, 100);
                    cm.spawnMobLimit(9300520, 1, -10, -386, 100);
                    break;
                case 931050428:
                    cm.spawnMobLimit(9300514, 1, 1444, 94, 100);
                    cm.spawnMobLimit(9300520, 1, 1637, 94, 100);
                    break;
                case 931050434:
                    cm.spawnMobLimit(9300878, 1, 73, 315, 100);
                    cm.spawnMobLimit(9300520, 1, -208, 315, 100);
                    break;
                case 931050435:
                    cm.spawnMobLimit(9300879, 1, -55, 167, 100);
                    cm.spawnMobLimit(9300520, 1, 183, 167, 100);
                    break;
                case 931050436:
                    cm.spawnMobLimit(9300880, 1, 533, 543, 100);
                    cm.spawnMobLimit(9300520, 1, 568, 543, 100);
                    break
            }
            cm.dispose()
        }
    }
};