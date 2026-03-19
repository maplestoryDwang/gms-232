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
      cm.updateInfoQuest(34450, "enter=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -500, 110);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, -340, 110);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(3003368, "oid=1878507", -800, 200, 4, -850, -750, 0, true, 0, false);
                  cm.npc_SetSpecialAction("oid=1878507", "summon", 0, 0);
                  cm.sendNormalTalk_Bottom('啊！这个声音是……？', 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=1878507", 1, 1000, 220);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(-1);
                      cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(7);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(1);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(2, 550);
                            cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, -128, 28);
                          } else {
                            if (status === V++) {
                              cm.effect_NormalSpeechBalloon("飞鱼！你回来了啊！", 0, 0, 0, 3000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(450003010, 1, true);
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