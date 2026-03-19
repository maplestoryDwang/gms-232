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
    cm.onActionBarResult(6, -1);
    cm.dispose();
    if (cm.isQuestFinished(29964) && cm.getQuestStatus(33127) == 0) {
      cm.startQuestScript(0, 33127);
    }
  }
}