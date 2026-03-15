var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_SetSpecialAction("oid=3999585", "morph", 0, 1);
      cm.inGameDirectionEvent_AskAnswerTime(3720);
    } else if (status === V++) {
      cm.npc_LeaveField("oid=3999585");
      cm.spawnMobLimit(9400080, 1, 580, 58, 1);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(false, true, false);
      cm.dispose();
    }
  }
}