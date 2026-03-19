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
    cm.spawnMobLimit(2400620, 1, -800, -167, 4);
    cm.spawnMobLimit(2400620, 1, -300, -167, 4);
    cm.spawnMobLimit(2400620, 1, 200, -167, 4);
    cm.useItem(2210219, false);
    cm.onActionBarResult(5, 47);
    cm.spawnMobLimit(2400620, 1, 200, -167, 4);
    cm.dispose();
  }
}