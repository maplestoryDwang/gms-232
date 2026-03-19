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
    cm.spawnMobLimit(9390834, 1, -450, 40, 100);
    cm.spawnMobLimit(9390833, 1, -300, 40, 100);
    cm.spawnMobLimit(9390834, 1, -150, 40, 100);
    cm.spawnMobLimit(9390833, 1, 90, 40, 100);
    cm.spawnMobLimit(9390834, 1, 150, 40, 100);
    cm.spawnMobLimit(9390833, 1, 300, 40, 100);
    cm.spawnMobLimit(9390834, 1, 450, 40, 100);
    cm.spawnMobLimit(9390822, 1, 600, 40, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;