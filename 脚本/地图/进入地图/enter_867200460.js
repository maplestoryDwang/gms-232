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
    cm.npc_ChangeController(9400590, 'oid=201554', -2138, 335, 20, -2188, -2088, 1, true, false);
    cm.playerMessage(-1, "在10分钟内收集50个花花象肉。");
    cm.spawnMobLimit(9402301, 1, -2350, 235, 1);
    cm.forceJoinEvent("莫奈德_地图_Act1.2_雪前狩猎");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;