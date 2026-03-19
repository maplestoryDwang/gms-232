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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -107, 130);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3004112, "oid=2425593", -35, 146, 5, -85, 15, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2425593", 'summon', 0, 0);
        cm.npc_ChangeController(3004111, "oid=2425594", -97, 149, 4, -147, -47, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2425594", "summon", 0, 0);
        cm.npc_ChangeController(3004110, "oid=2425595", 198, 141, 8, 148, 248, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2425595", "summon", 0, 0);
        cm.npc_ChangeController(3004109, "oid=2425596", 108, 141, 7, 58, 158, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2425596", "summon", 0, 0);
        cm.npc_ChangeController(3004113, "oid=2425597", 30, 97, 6, -20, 80, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=2425597", "summon", 0, 0);
        cm.npc_ChangeController(3004100, "oid=2425598", 950, 67, 26, 900, 1000, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2425598", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(10000, 0, 1500, 10000, 800, 130);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1800);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("advStory/stoneOfMaple", 100);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2500);
                cm.effect_NormalSpeechBalloon("哪里来的一片枫叶……？", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, 0, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                  cm.effect_NormalSpeechBalloon("不过这一回，看样子能赢。", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, 0, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(993110786, 0, false);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.npc_LeaveField("oid=2425593");
                    cm.npc_LeaveField("oid=2425593");
                    cm.npc_LeaveField("oid=2425594");
                    cm.npc_LeaveField("oid=2425594");
                    cm.npc_LeaveField("oid=2425595");
                    cm.npc_LeaveField("oid=2425595");
                    cm.npc_LeaveField("oid=2425596");
                    cm.npc_LeaveField("oid=2425596");
                    cm.npc_LeaveField("oid=2425597");
                    cm.npc_LeaveField("oid=2425597");
                    cm.npc_LeaveField("oid=2425598");
                    cm.npc_LeaveField("oid=2425598");
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}