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
      cm.npc_ChangeController(1530150, "oid=37897618", 547, 58, 2, 497, 597, 1, true, false);
      cm.npc_SetSpecialAction("oid=37897618", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#难怪她……", 37, 1530150, false, true);
          cm.effect_Voice("Voice2.img/Friends/CH3_05/2", 100);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("#fs40#真是令人费神. ", 1);
              cm.effect_Voice("Voice2.img/Friends/CH3_05/3", 100);
            } else if (status === V++) {
              cm.gainExp(Math.pow(cm.getLevel(), 3));
              cm.forceCompleteQuest(32823);
              cm.updateInfoQuest(32719, "gal=1;sms=1;add=0");
              cm.dispose();
              cm.warp(100000004, 0);
              cm.inGameDirectionEvent_SetHideEffect(0);
              cm.setInGameDirectionMode(false, true, false);
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