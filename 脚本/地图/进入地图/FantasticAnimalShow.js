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
    if (cm.isQuestFinished(31386)) {
      cm.spawnMobLimit(8145200, 1, 20, -46, 100);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;