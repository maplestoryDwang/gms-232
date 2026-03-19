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
    if (cm.isQuestFinished(34477)) {
      if (!cm.isQuestFinished(34479)) {
        cm.forceCompleteQuest(34479);
      }
      if (!cm.isQuestFinished(34489)) {
        cm.forceCompleteQuest(34489);
      }
      if (cm.getQuestStatus(34487) == 0) {
        cm.forceStartQuest(34487, '');
      }
      if (!cm.isQuestFinished(34457)) {
        cm.forceCompleteQuest(34457);
      }
    }
    cm.updateInfoQuest(16214, "count=0;date=19/01/07;coin=30");
    cm.updateInfoQuest(16214, "count=0;date=19/01/07;coin=0");
    cm.updateInfoQuest(16214, "count=0;date=19/12/22;coin=0");
    cm.updateInfoQuest(34493, "tCoin=11;PassCount=0");
    cm.updateInfoQuest(34493, "tCoin=0;PassCount=0");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;