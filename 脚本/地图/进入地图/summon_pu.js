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
    if (cm.isQuestActive(17679)) {
      cm.spawnMobLimit(9390817, 1, 517, 66, 100);
      cm.spawnMobLimit(9390816, 1, 388, 72, 100);
      cm.spawnMobLimit(9390816, 1, 388, 72, 100);
      cm.spawnMobLimit(9390816, 1, 388, 72, 100);
      cm.spawnMobLimit(9390816, 1, 388, 72, 100);
      cm.spawnMobLimit(9390816, 1, 388, 72, 100);
      cm.spawnMobLimit(9390816, 1, 388, 72, 100);
      cm.spawnMobLimit(9390816, 1, 388, 72, 100);
      cm.spawnMobLimit(9390816, 1, 388, 72, 100);
      cm.spawnMobLimit(9390816, 1, 388, 72, 100);
      cm.spawnMobLimit(9390816, 1, 388, 72, 100);
      cm.spawnMobLimit(9390815, 1, 230, 150, 100);
      cm.spawnMobLimit(9390815, 1, 230, 150, 100);
      cm.spawnMobLimit(9390815, 1, 230, 150, 100);
      cm.spawnMobLimit(9390815, 1, 230, 150, 100);
      cm.spawnMobLimit(9390815, 1, 230, 150, 100);
      cm.spawnMobLimit(9390815, 1, 230, 150, 100);
      cm.spawnMobLimit(9390815, 1, 230, 150, 100);
      cm.spawnMobLimit(9390815, 1, 230, 150, 100);
      cm.spawnMobLimit(9390815, 1, 230, 150, 100);
      cm.spawnMobLimit(9390815, 1, 230, 150, 100);
    }
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;