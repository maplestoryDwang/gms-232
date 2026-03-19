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
    if (!cm.isQuestFinished(20946)) {
      cm.forceStartQuest(20946, '');
    }
    cm.spawnMobLimit(9300733, 1, 1800, -14, 100);
    cm.spawnMobLimit(9300733, 1, 1650, -14, 100);
    cm.spawnMobLimit(9300733, 1, 1000, -14, 100);
    cm.dispose();
  }
}