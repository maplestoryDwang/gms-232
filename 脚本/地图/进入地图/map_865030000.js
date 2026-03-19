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
    if (cm.isQuestActive(17660)) {
      cm.spawnMobLimit(9390833, 1, -360, 40, 20);
      cm.spawnMobLimit(9390833, 1, -360, 40, 20);
      cm.spawnMobLimit(9390833, 1, -360, 40, 20);
      cm.spawnMobLimit(9390834, 1, -420, 40, 20);
      cm.spawnMobLimit(9390834, 1, -420, 40, 20);
      cm.spawnMobLimit(9390834, 1, -420, 40, 20);
      cm.spawnMobLimit(9390833, 1, 360, 40, 20);
      cm.spawnMobLimit(9390833, 1, 360, 40, 20);
      cm.spawnMobLimit(9390833, 1, 360, 40, 20);
      cm.spawnMobLimit(9390834, 1, 420, 40, 20);
      cm.spawnMobLimit(9390834, 1, 420, 40, 20);
      cm.spawnMobLimit(9390834, 1, 420, 40, 20);
    }
    if (!cm.isQuestFinished(17930)) {
      cm.forceStartQuest(17930, '1');
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