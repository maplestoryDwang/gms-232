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
  } else {
    if (status === V++) {
      cm.updateInfoQuest(61333, "act1=610061450");
      cm.userSetFieldFloating(610061450, 5, 5, 5);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else if (status === V++) {
      cm.addPopupSay(9201537, 2000, "有点不对劲！守护者的要塞好像快塌了的样子！", '', 0);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(false, true, false);
      cm.npc_LeaveField("oid=69259");
      cm.dispose();
    }
  }
}