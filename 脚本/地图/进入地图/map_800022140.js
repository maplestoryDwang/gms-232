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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9112007, "oid=3634317", 65, -155, 31, 15, 115, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3634317", "summon", 0, 0);
      cm.npc_ChangeController(9112007, "oid=3634318", 110, -155, 38, 60, 160, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3634318", "summon", 0, 0);
      cm.npc_ChangeController(9112007, "oid=3634319", 150, -155, 38, 100, 200, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3634319", 'summon', 0, 0);
      cm.npc_ChangeController(9112007, "oid=3634320", -550, -155, 36, -600, -500, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3634320", "summon", 0, 0);
      cm.npc_ChangeController(9112007, "oid=3634321", -400, -155, 29, -450, -350, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3634321", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#喂，你就是那个最近到处打听鵺大人底细的活人吧？", 36, 9112007, false, true);
          cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#活人了不起啊……这么放肆……！让你尝尝我们的厉害！", 36, 9112007, true, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.forceCompleteQuest(58746);
                  cm.npc_LeaveField("oid=3634317");
                  cm.npc_LeaveField("oid=3634317");
                  cm.npc_LeaveField("oid=3634318");
                  cm.npc_LeaveField("oid=3634318");
                  cm.npc_LeaveField("oid=3634319");
                  cm.npc_LeaveField("oid=3634319");
                  cm.npc_LeaveField("oid=3634320");
                  cm.npc_LeaveField("oid=3634320");
                  cm.npc_LeaveField("oid=3634321");
                  cm.npc_LeaveField("oid=3634321");
                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                } else if (status === V++) {
                  cm.eventSKill(0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.spawnMobLimit(9400046, 1, 65, -148, 100);
                  cm.spawnMobLimit(9400046, 1, 110, -148, 100);
                  cm.spawnMobLimit(9400046, 1, 150, -148, 100);
                  cm.spawnMobLimit(9400046, 1, -550, -148, 100);
                  cm.spawnMobLimit(9400046, 1, -400, -148, 100);
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