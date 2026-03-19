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
    if (!cm.isQuestFinished(20947)) {
      cm.forceStartQuest(20947, '');
    }
    cm.spawnMobLimit(9300734, 1, 300, 18, 100);
    cm.spawnMobLimit(9300735, 1, 315, 18, 100);
    cm.dispose();
  }
}