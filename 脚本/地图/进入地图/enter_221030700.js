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
  } else {
    if (status === V++) {
      if (cm.isQuestActive(3489)) {
        cm.setPartner(1, 2052036, 80002246, 0);
      } else if (cm.isQuestFinished(3489) && !cm.isQuestFinished(3490)) {
        cm.setPartner(1, 2052037, 80002246, 0);
      }
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;