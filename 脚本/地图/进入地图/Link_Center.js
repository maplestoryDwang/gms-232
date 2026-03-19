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
    if (cm.isQuestFinished(1846) && cm.getQuestStatus(1847) == 0) {
      cm.forceStartQuest(1847, '');
    }
    cm.setQuestCustomData(1826, '');
    cm.updateInfoQuest(1826, '');
    cm.dispose();
  }
}