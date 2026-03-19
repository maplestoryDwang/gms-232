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
      cm.forceCompleteQuest(58727);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111030, "oid=3784927", 805, -30, 21, 755, 855, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3784927", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=3784927", "stand2", 0, 1);
      cm.sendNormalTalk_Bottom("#face0#那么，现在开始进行荐度斋吧。", 37, 9111001, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.setNpcSpecialActionReset("oid=3784927");
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("(这幅场面简直太美了……)", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.npc_LeaveField("oid=3784927");
                  cm.npc_LeaveField("oid=3784927");
                  cm.eventSKill(0);
                  cm.dispose();
                  cm.warp(800020013, 0, true);
                }
              }
            }
          }
        }
      }
    }
  }
}