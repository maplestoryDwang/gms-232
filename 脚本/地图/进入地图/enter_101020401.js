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
    if (cm.isQuestActive(22741) || cm.isQuestActive(22742) || cm.isQuestActive(22746) || cm.isQuestActive(22747) || cm.isQuestActive(22748)) {
      cm.setPartner(1, 1531009, 80001788, 0);
    }
    cm.dispose();
  }
}