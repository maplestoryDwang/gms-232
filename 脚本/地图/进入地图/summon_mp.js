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
    if (cm.isQuestFinished(17662) && !cm.isQuestFinished(17663)) {
      cm.spawnMobLimit(9390834, 1, 200, 40, 20);
      cm.spawnMobLimit(9390834, 1, 100, 40, 20);
      cm.spawnMobLimit(9390834, 1, 90, 40, 20);
      cm.spawnMobLimit(9390834, 1, -200, 40, 20);
      cm.spawnMobLimit(9390834, 1, -400, 40, 20);
      cm.spawnMobLimit(9390834, 1, -600, 40, 20);
      cm.spawnMobLimit(9390834, 1, -800, 40, 20);
      cm.spawnMobLimit(9390834, 1, -900, 40, 20);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;