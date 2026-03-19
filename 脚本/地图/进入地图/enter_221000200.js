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
    if (cm.getQuestStatus(3478) > 0 && !cm.isQuestFinished(3487)) {
      cm.setPartner(1, 2052032, 80002245, 0);
    }
    if (cm.isQuestActive(3495)) {
      cm.sendNormalTalk_Bottom("我要和大家都聊一聊。", 57, 0, false, false);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;