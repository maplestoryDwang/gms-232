var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
    cm.spawnMobLimit(9601340, 1, 1150, -210, 100);
    cm.spawnMobLimit(9601340, 1, 883, -210, 100);
    cm.spawnMobLimit(9601340, 1, 664, -210, 100);
    cm.spawnMobLimit(9601340, 1, 1230, 70, 100);
    cm.spawnMobLimit(9601340, 1, 983, 72, 100);
    cm.spawnMobLimit(9601340, 1, 748, 71, 100);
    cm.spawnMobLimit(9601340, 1, -425, -160, 100);
    cm.spawnMobLimit(9601340, 1, -182, -160, 100);
    cm.spawnMobLimit(9601340, 1, 54, -160, 100);
    cm.spawnMobLimit(9601340, 1, 194, 74, 100);
    cm.spawnMobLimit(9601340, 1, 6, 66, 100);
    cm.spawnMobLimit(9601340, 1, -184, 74, 100);
    cm.onActionBarResult(5, 1013);
    cm.dispose();
  }
}