var status = -1;
var selectionLog = [];
function action(f, E, e) {
  cm.cancelItem(2210211);
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
    cm.playerMessage(-1, "去收集50个古纳德村长要求的肉。");
    cm.dispose();
    cm.forceJoinEvent("莫奈德_地图_Act2.1_收集野狼肉");
    cm.spawnMobLimit(9402301, 1, -1700, 45, 1);
    cm.spawnMobLimit(9402304, 1, -1750, 45, 1);
    cm.spawnMobLimit(9402314, 1, -1800, 45, 3);
    cm.spawnMobLimit(9402314, 1, -1850, 45, 3);
    cm.spawnMobLimit(9402314, 1, -1900, 45, 3);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;