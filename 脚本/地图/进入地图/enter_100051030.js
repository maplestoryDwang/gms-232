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
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    if (cm.getQuestStatus(35913) == 1) {
      cm.warp(910090308, 0);
      cm.dispose();
    } else {
      cm.Hidden_background('0', 1, 0, 0, 0);
      cm.setPartner(1, 1013350, 80002700, 0);
      cm.dispose();
    }
  }
}