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
    cm.spawnMobLimit(2400614, 1, 875, -411, 100);
    cm.spawnMobLimit(2400614, 1, 733, -411, 100);
    cm.spawnMobLimit(2400614, 1, 1163, -221, 100);
    cm.spawnMobLimit(2400614, 1, 1007, -221, 100);
    cm.spawnMobLimit(2400614, 1, 1622, 13, 100);
    cm.spawnMobLimit(2400614, 1, 1472, 13, 100);
    cm.spawnMobLimit(2400614, 1, 1324, 13, 100);
    cm.spawnMobLimit(2400614, 1, 1191, 13, 100);
    cm.spawnMobLimit(2400614, 1, 867, 13, 100);
    cm.spawnMobLimit(2400614, 1, 711, 13, 100);
    cm.spawnMobLimit(2400614, 1, -14, -411, 100);
    cm.spawnMobLimit(2400614, 1, -205, -411, 100);
    cm.spawnMobLimit(2400614, 1, -383, -411, 100);
    cm.spawnMobLimit(2400614, 1, 396, -221, 100);
    cm.spawnMobLimit(2400614, 1, 142, -221, 100);
    cm.spawnMobLimit(2400614, 1, 445, -221, 100);
    cm.spawnMobLimit(2400614, 1, 376, 13, 100);
    cm.spawnMobLimit(2400614, 1, 337, 13, 100);
    cm.spawnMobLimit(2400614, 1, 1, 13, 100);
    cm.spawnMobLimit(2400614, 1, -106, 13, 100);
    cm.spawnMobLimit(2400614, 1, -129, 13, 100);
    cm.spawnMobLimit(2400614, 1, -167, 13, 100);
    cm.spawnMobLimit(2400614, 1, -400, -221, 100);
    cm.spawnMobLimit(2400614, 1, -526, -221, 100);
    cm.spawnMobLimit(2400614, 1, -669, -221, 100);
    cm.spawnMobLimit(2400614, 1, -545, 13, 100);
    cm.spawnMobLimit(2400614, 1, -543, 13, 100);
    cm.spawnMobLimit(2400614, 1, -379, 13, 100);
    cm.spawnMobLimit(2400614, 1, -744, 13, 100);
    cm.spawnMobLimit(2400614, 1, -1356, 13, 100);
    cm.spawnMobLimit(2400614, 1, -731, 13, 100);
    cm.spawnMobLimit(2400614, 1, -677, 13, 100);
    cm.spawnMobLimit(2400614, 1, -1233, 13, 100);
    cm.dispose();
  } else {
    cm.dispose();
  }
}