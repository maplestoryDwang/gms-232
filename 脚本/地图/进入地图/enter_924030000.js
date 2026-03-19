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
    cm.spawnMobLimit(9100044, 1, 800, 60, 6);
    cm.spawnMobLimit(9100044, 1, 700, 60, 6);
    cm.spawnMobLimit(9100044, 1, 600, 60, 6);
    cm.spawnMobLimit(9100044, 1, 400, 60, 6);
    cm.spawnMobLimit(9100044, 1, 200, 60, 6);
    cm.spawnMobLimit(9100044, 1, 0, 60, 6);
    cm.dispose();
  }
}