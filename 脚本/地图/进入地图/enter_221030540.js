var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
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
    if (cm.getQuestStatus(3478) > 0 && !cm.isQuestFinished(3487)) {
      cm.setPartner(1, 2052032, 80002245, 0);
    }
    cm.cancelItem(2210203);
    cm.cancelItem(2210203);
    cm.dispose();
  }
}