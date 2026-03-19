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
      cm.npc_ChangeController(1530160, "oid=37893203", 547, 58, 5, 497, 597, 1, true, false);
      cm.npc_SetSpecialAction("oid=37893203", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_Text(["#fn黑体##fs26#几天后"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=37893203", -1, 100, 120);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=37893203", 1, 80, 120);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#难怪他……", 37, 1530160, false, true);
                cm.effect_Voice("Voice2.img/Friends/CH3_05/1", 100);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(330002321, 0);
                  cm.inGameDirectionEvent_SetHideEffect(0);
                  cm.setInGameDirectionMode(false, true, false);
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