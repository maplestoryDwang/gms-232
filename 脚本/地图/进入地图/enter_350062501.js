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
      cm.npc_ChangeController(1540730, "oid=286617316", 0, 0, 2, -50, 50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286617316", 'summon', 0, 0);
      cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect2.img/blackHeaven/gal2", 0, 1500, 0, 0, 10, 8, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_SetSpecialAction("oid=286617316", 'fire', -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_Voice("Voice3.img/BlackHeaven/gel/0/4", 100);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer('1', '', 1, 500, -500, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(3500);
          } else {
            if (status === V++) {
              cm.fieldEffect_ProcessOnOffLayer('1', '', 1, 500, 500, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.npcMove(1540730, 0, -1000, 2000);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(350062600, 0, true);
                  cm.npc_LeaveField("oid=286617316");
                  cm.npc_LeaveField("oid=286617316");
                }
              }
            }
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