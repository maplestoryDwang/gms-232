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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=19786593", -520, 93, 7, -570, -470, 0, true, false);
      cm.npc_SetSpecialAction("oid=19786593", 'summon', 0, 0);
      cm.npc_ChangeController(9400032, "oid=19786594", -701, 93, 7, -751, -651, 0, true, false);
      cm.npc_SetSpecialAction("oid=19786594", "summon", 0, 0);
      cm.npc_ChangeController(9400033, "oid=19786595", -590, 93, 7, -640, -540, 0, true, false);
      cm.npc_SetSpecialAction("oid=19786595", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19786596", -640, 93, 7, -690, -590, 0, true, false);
      cm.npc_SetSpecialAction("oid=19786596", "summon", 0, 0);
      cm.npc_ChangeController(9400035, "oid=19786597", -440, 93, 7, -490, -390, 0, true, false);
      cm.npc_SetSpecialAction("oid=19786597", "summon", 0, 0);
      cm.npc_SetForceMove("oid=19786597", 1, 1000, 250);
      cm.npc_SetForceMove("oid=19786594", 1, 1000, 230);
      cm.npc_SetForceMove("oid=19786593", 1, 1000, 230);
      cm.npc_SetForceMove("oid=19786595", 1, 1000, 220);
      cm.npc_SetForceMove("oid=19786596", 1, 1000, 200);
      cm.inGameDirectionEvent_AskAnswerTime(5200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else if (status === V++) {
        cm.inGameDirectionEvent_SetHideEffect(0);
        cm.setStandAloneMode(false);
        cm.eventSKill(0);
        cm.warp(867111300, 0);
        cm.setInGameDirectionMode(false, true, false);
        cm.playerMessage(5, "穿过陷阱，寻找灵灵吧！");
        cm.npc_LeaveField("oid=19786593");
        cm.npc_LeaveField("oid=19786594");
        cm.npc_LeaveField("oid=19786595");
        cm.npc_LeaveField("oid=19786596");
        cm.npc_LeaveField("oid=19786597");
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;