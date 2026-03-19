var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getQuestStatus(3478) > 0 && !cm.isQuestFinished(3487)) {
    cm.setPartner(1, 2052032, 80002245, 0);
  }
  if (cm.isQuestFinished(3487) && cm.getQuestStatus(3488) == 0) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
    cm.updateInfoQuest(3487, 'enter=1');
    cm.dispose();
    cm.warp(221030602, 1);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;