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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3003369, "oid=1901655", 292, 123, 3, 242, 342, 1, true, false);
      cm.npc_SetSpecialAction("oid=1901655", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=1901655", 'stand2', -1, 1);
      cm.setNpcSpecialActionReset("oid=1901655");
      cm.npc_SetSpecialAction("oid=1901655", "appear", 0, 1);
      cm.inGameDirectionEvent_AskAnswerTime(4500);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("这可是刚刚那些家伙完全无法比拟的邪恶的气息。", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(900);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("……一定要阻止，不能让那家伙猖狂。", 57, 0, false, true);
          } else if (status === V++) {
            cm.npc_LeaveField("oid=1901655");
            cm.dispose();
            cm.warp(940200280, 0);
            cm.setInGameDirectionMode(false, true, false);
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;