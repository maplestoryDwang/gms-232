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
    cm.spawnMobLimit(9300771, 1, -2042, 28, 100);
    cm.spawnMobLimit(9300771, 1, -1842, 28, 100);
    cm.spawnMobLimit(9300771, 1, -1642, 28, 100);
    cm.spawnMobLimit(9300771, 1, -1442, 28, 100);
    cm.spawnMobLimit(9300771, 1, -1242, 28, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;