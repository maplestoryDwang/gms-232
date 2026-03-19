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
      if (!cm.isQuestFinished(34477)) {
        cm.hideNpc(3003422);
      }
      if (cm.isQuestActive(34474)) {
        var O = cm.getNumberFromQuestInfo(34474, "fin");
        if (O >= 1) {
          cm.setPartner(1, 34480, 80002269, 0);
        }
        if (O >= 2) {
          cm.setPartner(1, 34481, 80002269, 0);
        }
        if (O >= 3) {
          cm.setPartner(1, 34482, 80002269, 0);
        }
        if (O >= 4) {
          cm.setPartner(1, 34483, 80002269, 0);
        }
        if (O >= 5) {
          cm.setPartner(1, 34484, 80002269, 0);
        }
        if (O >= 6) {
          cm.setPartner(1, 34485, 80002269, 0);
        }
        if (O >= 7) {
          cm.setPartner(1, 34486, 80002269, 0);
        }
      }
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;