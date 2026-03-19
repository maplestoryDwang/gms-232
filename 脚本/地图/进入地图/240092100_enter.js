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
  } else {
    if (status === V++) {
      if (cm.getQuestStatus(31349) > 0) {
        if (cm.isQuestFinished(31351) && cm.getMapId() == 240092101) {
          cm.warp(240092100, 0, true);
        } else if (!cm.isQuestFinished(31351) && cm.getMapId() == 240092100) {
          cm.warp(240092101, 0, true);
        }
      }
      cm.dispose();
    }
  }
}