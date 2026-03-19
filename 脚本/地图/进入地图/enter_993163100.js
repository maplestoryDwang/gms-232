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
    cm.spawnMobLimit(2400613, 1, 875, -411, 100);
    cm.spawnMobLimit(2400613, 1, 733, -411, 100);
    cm.spawnMobLimit(2400613, 1, 1163, -221, 100);
    cm.spawnMobLimit(2400613, 1, 1007, -221, 100);
    cm.spawnMobLimit(2400613, 1, 1622, 13, 100);
    cm.spawnMobLimit(2400613, 1, 1472, 13, 100);
    cm.spawnMobLimit(2400613, 1, 1324, 13, 100);
    cm.spawnMobLimit(2400613, 1, 1191, 13, 100);
    cm.spawnMobLimit(2400613, 1, 867, 13, 100);
    cm.spawnMobLimit(2400613, 1, 711, 13, 100);
    cm.spawnMobLimit(2400613, 1, 1083, -411, 100);
    cm.spawnMobLimit(2400613, 1, 120, 13, 100);
    cm.spawnMobLimit(2400613, 1, 123, -411, 100);
    cm.spawnMobLimit(2400613, 1, -8, -411, 100);
    cm.spawnMobLimit(2400613, 1, -344, -411, 100);
    cm.spawnMobLimit(2400613, 1, 105, -221, 100);
    cm.spawnMobLimit(2400613, 1, 154, -221, 100);
    cm.spawnMobLimit(2400613, 1, 383, -221, 100);
    cm.spawnMobLimit(2400613, 1, 270, 13, 100);
    cm.spawnMobLimit(2400613, 1, -10, 13, 100);
    cm.spawnMobLimit(2400613, 1, -429, 13, 100);
    cm.spawnMobLimit(2400613, 1, -105, 13, 100);
    cm.spawnMobLimit(2400613, 1, -747, -221, 100);
    cm.spawnMobLimit(2400613, 1, -732, -221, 100);
    cm.spawnMobLimit(2400613, 1, -563, 13, 100);
    cm.spawnMobLimit(2400613, 1, -750, 13, 100);
    cm.spawnMobLimit(2400613, 1, -284, 13, 100);
    cm.spawnMobLimit(2400613, 1, -981, 13, 100);
    cm.spawnMobLimit(2400613, 1, -1293, 13, 100);
    cm.dispose();
  } else {
    cm.dispose();
  }
}