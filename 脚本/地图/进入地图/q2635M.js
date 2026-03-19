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
    cm.spawnMobLimit(9300527, 1, 144, 190, 100);
    cm.spawnMobLimit(9300527, 1, 144, 190, 100);
    cm.spawnMobLimit(9300527, 1, 144, 190, 100);
    cm.spawnMobLimit(9300527, 1, 144, 190, 100);
    cm.spawnMobLimit(9300527, 1, 144, 190, 100);
    cm.spawnMobLimit(9300527, 1, 144, 190, 100);
    cm.spawnMobLimit(9300527, 1, 144, 190, 100);
    cm.spawnMobLimit(9300527, 1, 144, 190, 100);
    cm.spawnMobLimit(9300527, 1, 144, 190, 100);
    cm.spawnMobLimit(9300527, 1, 144, 190, 100);
    cm.spawnMobLimit(9300527, 1, 144, 190, 100);
    cm.spawnMobLimit(9300527, 1, 144, 190, 100);
    cm.dispose();
  }
}