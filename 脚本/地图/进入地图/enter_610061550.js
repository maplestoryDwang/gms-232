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
      cm.updateInfoQuest(61333, "act1=610061550");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201539, "oid=2870052", 1137, 96, 52, 1087, 1187, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2870052", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(3200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1600);
      } else if (status === V++) {
        cm.eventSKill(0);
        cm.warp(610061560, 0, true);
        cm.setInGameDirectionMode(false, true, false);
        cm.npc_LeaveField("oid=2870052");
        cm.npc_LeaveField("oid=2870052");
        cm.dispose();
      }
    }
  }
}