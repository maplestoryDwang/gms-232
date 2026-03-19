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
    cm.spawnMobLimit(9390829, 10, -250, 302, 100);
    cm.spawnMobLimit(9390830, 10, 352, 302, 100);
    cm.spawnMobLimit(9390831, 10, 250, 302, 100);
    cm.spawnMobLimit(9390832, 10, 500, 302, 100);
    cm.spawnMobLimit(9390812, 1, 750, 302, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;