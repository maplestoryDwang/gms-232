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
    cm.spawnMobLimit(8230047, 1, -570, 90, 100);
    cm.spawnMobLimit(8230047, 1, -900, 90, 100);
    cm.spawnMobLimit(8230047, 1, -1100, 90, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;