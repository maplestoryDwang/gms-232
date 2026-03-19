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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063015");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201534, "oid=2709853", 1722, 94, 31, 1672, 1772, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2709853", "summon", 0, 0);
      cm.npc_ChangeController(9201579, "oid=2709854", 1790, 94, 31, 1740, 1840, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2709854", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1650, 150);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.sendNormalTalk_Bottom("你输了，父亲。", 37, 9201534, false, true);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=2709853", -1, 400, 100);
              cm.inGameDirectionEvent_AskAnswerTime(200);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=2709854", -1, 400, 100);
                cm.inGameDirectionEvent_AskAnswerTime(4200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.eventSKill(0);
                  cm.warp(610063020, 0, true);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=2709853");
                  cm.npc_LeaveField("oid=2709854");
                  cm.dispose();
                }
              }
            }
          }
        }
      }
    }
  }
}