var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.npc_ChangeController(9400580, 'oid=201255', 3567, -1264, 6, 3521, 3617, 1, true, false);
    cm.npc_ChangeController(9400593, 'oid=201256', 3512, -1257, 6, 3512, 3562, 1, true, false);
    cm.npc_ChangeController(9400595, "oid=201257", 3668, -1273, 8, 3618, 3701, 0, true, false);
    cm.spawnMob(9402313, 1, 3100, 326);
    cm.spawnMob(9402266, 1, 3000, 325);
    cm.spawnMob(9402301, 1, 2800, 325);
    cm.scheduleOpenNpcTask(60, 3, "莫奈德_Act1_营救卡夫塔佩");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;