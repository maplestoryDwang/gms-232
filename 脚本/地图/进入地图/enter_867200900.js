var status = -1;
var selectionLog = [];
function action(f, E, e) {
  cm.cancelItem(2210207);
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
    cm.forceStartQuest(64158, '');
    cm.spawnMobLimit(9402314, 1, 225, 291, 2);
    cm.spawnMobLimit(9402313, 1, 130, 291, 2);
    cm.spawnMobLimit(9402314, 1, 430, 291, 2);
    cm.spawnMobLimit(9402304, 1, 365, 291, 1);
    cm.spawnMobLimit(9402313, 1, 455, 291, 2);
    cm.forceJoinEvent("莫奈德_地图_Act1.8_再次收集资源");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;