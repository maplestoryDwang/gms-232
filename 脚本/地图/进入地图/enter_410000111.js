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
    if (cm.isQuestActive(34752)) {
      cm.setPartner(1, 3002110, 80002360, 0);
    }
    if (cm.isQuestActive(39566)) {
      cm.setPartner(1, 3001683, 80002800, 0);
    }
    if (cm.getNumberFromQuestInfo(39566, "gochi1") > 0) {
      cm.setPartner(1, 3001668, 80002806, 0);
    }
    if (cm.getNumberFromQuestInfo(39566, "gochi2") > 0) {
      cm.setPartner(1, 3001649, 80002807, 0);
    }
    cm.dispose();
  }
}