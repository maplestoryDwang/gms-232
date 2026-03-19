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
    cm.spawnMobLimit(9400809, 1, 271, -433, 6);
    cm.spawnMobLimit(9400809, 1, 1162, -193, 6);
    cm.spawnMobLimit(9400809, 1, 312, 47, 6);
    cm.spawnMobLimit(9400809, 1, 271, -433, 6);
    cm.spawnMobLimit(9400809, 1, 1162, -193, 6);
    cm.spawnMobLimit(9400809, 1, 312, 47, 6);
    cm.dispose();
  }
}