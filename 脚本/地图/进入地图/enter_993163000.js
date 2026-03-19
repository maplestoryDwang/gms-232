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
    cm.killAllMobNoExp();
    cm.spawnMobLimit(2400613, 1, 1081, -410, 100);
    cm.spawnMobLimit(2400614, 1, 898, -410, 100);
    cm.spawnMobLimit(2400613, 1, 762, -410, 100);
    cm.spawnMobLimit(2400614, 1, 1578, -221, 100);
    cm.spawnMobLimit(2400613, 1, 1447, -221, 100);
    cm.spawnMobLimit(2400614, 1, 1321, -221, 100);
    cm.spawnMobLimit(2400613, 1, 1622, 13, 100);
    cm.spawnMobLimit(2400614, 1, 1472, 13, 100);
    cm.spawnMobLimit(2400613, 1, 1324, 13, 100);
    cm.spawnMobLimit(2400614, 1, 1191, 13, 100);
    cm.spawnMobLimit(2400613, 1, 867, 13, 100);
    cm.spawnMobLimit(2400614, 1, 711, 13, 100);
    cm.spawnMobLimit(2400613, 1, -323, -411, 100);
    cm.spawnMobLimit(2400614, 1, -154, -411, 100);
    cm.spawnMobLimit(2400613, 1, -85, -221, 100);
    cm.spawnMobLimit(2400614, 1, 157, -221, 100);
    cm.spawnMobLimit(2400613, 1, 522, 13, 100);
    cm.spawnMobLimit(2400614, 1, 609, 13, 100);
    cm.spawnMobLimit(2400613, 1, -144, 13, 100);
    cm.spawnMobLimit(2400614, 1, 34, 13, 100);
    cm.spawnMobLimit(2400613, 1, -149, 13, 100);
    cm.spawnMobLimit(2400614, 1, -695, -221, 100);
    cm.spawnMobLimit(2400613, 1, -447, -221, 100);
    cm.spawnMobLimit(2400614, 1, -455, -221, 100);
    cm.spawnMobLimit(2400614, 1, -380, 13, 100);
    cm.spawnMobLimit(2400613, 1, -611, 13, 100);
    cm.spawnMobLimit(2400614, 1, -1126, 13, 100);
    cm.spawnMobLimit(2400613, 1, -1104, 13, 100);
    cm.spawnMobLimit(2400613, 1, -1344, 13, 100);
    cm.dispose();
  } else {
    cm.dispose();
  }
}