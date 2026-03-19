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
    if (cm.isQuestFinished(33511) && !cm.isQuestFinished(33515)) {
      cm.setPartner(1, 1530714, 80001728, 0);
      cm.setPartner(1, 1530609, 80001729, 0);
      cm.setPartner(1, 1530610, 80001730, 0);
      cm.setPartner(1, 1530607, 80001731, 0);
    }
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;