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
    if (!cm.isQuestFinished(63107)) {
      cm.getMap().spawnReactorIfNotExist(8659076, 0, 870, 85, 0, "tombStone");
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;