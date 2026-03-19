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
    cm.playerMessage(-1, '去收集暖和的狼人毛。');
    cm.spawnMobLimit(9402306, 1, -1300, 45, 1);
    cm.spawnMobLimit(9402311, 1, -1200, 45, 1);
    cm.dispose();
    cm.forceJoinEvent("莫奈德_地图_Act2.3_收集狼毛");
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;