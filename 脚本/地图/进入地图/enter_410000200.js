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
    cm.Hidden_background('doll', 1, cm.isQuestFinished(39522) && !cm.isQuestFinished(39540) ? 1 : 0, 0, 0);
    if (cm.isQuestFinished(39513) && cm.getNumberFromQuestInfo(39513, "1st") == 0) {
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 642, 18);
      cm.updateInfoQuest(39513, "1st=1");
    }
    if (cm.isQuestActive(39546)) {
      cm.OnStartNavigation(410000201, 0, '', 39546);
      cm.updateInfoQuest(39546, "dir=1");
    }
    cm.dispose();
  }
}