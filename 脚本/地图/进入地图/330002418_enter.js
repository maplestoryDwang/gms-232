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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1530070, "oid=38039082", 11, 82, 1, -39, 61, 0, true, false);
      cm.npc_SetSpecialAction("oid=38039082", "summon", 0, 0);
      cm.npc_ChangeController(1530555, "oid=38039083", -189, 82, 1, -239, -139, 1, false, false);
      cm.npc_SetSpecialAction("oid=38039083", "summon", 0, 0);
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
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("……是风声吗……看来是我听错了。", 37, 1530070, false, true);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(1530240, "oid=38040607", -289, 20, 1, -339, -239, 0, true, false);
              cm.npc_SetSpecialAction("oid=38040607", "summon", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
                cm.effect_Voice("SoundEff.img/thunder", 100);
              } else if (status === V++) {
                cm.inGameDirectionEvent_SetHideEffect(0);
                cm.dispose();
                cm.warp(330002419, 0);
                cm.setInGameDirectionMode(false, true, false);
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