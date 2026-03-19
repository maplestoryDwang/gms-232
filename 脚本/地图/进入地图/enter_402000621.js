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
    if (cm.isQuestFinished(34929) && !cm.isQuestFinished(34931)) {
      cm.setPartner(1, 3001509, 80002396, 0);
      cm.setPartner(1, 3001512, 80002398, 0);
      cm.setPartner(1, 3001513, 80002399, 0);
    }
    cm.dispose();
  }
}