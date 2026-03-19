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
      cm.npc_ChangeController(3001237, "oid=252015", -266, 23, 9, -316, -216, 0, false, 0, false);
      cm.npc_ChangeController(3001274, "oid=252016", -362, 23, 9, -412, -312, 0, false, 0, false);
      cm.npc_ChangeController(3001274, "oid=252017", -426, 23, 9, -476, -376, 0, false, 0, false);
      cm.npc_ChangeController(3001274, "oid=252018", -178, 23, 10, -228, -128, 0, false, 0, false);
      cm.updateInfoQuest(34655, "10=1;11=1;gender=1;0=1;2=1;3=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3001251, "oid=683036", 840, 11, 14, 790, 890, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=683036", 'summon', 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#看来这里已经被Mr.哈扎尔占领了。幸好我们穿了伪装斗篷。", 37, 3001251, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#那、那不如伪装成参赛者入场吧？", 37, 3001251, true, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
                  cm.npc_SetForceMove("oid=683036", -1, 300, 150);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                    } else if (status === V++) {
                      cm.npc_LeaveField("oid=683036");
                      cm.dispose();
                      cm.warp(402000300, 1, true);
                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                      cm.setInGameDirectionMode(false, true, false);
                      cm.setStandAloneMode(false);
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
}