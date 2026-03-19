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
      cm.updateInfoQuest(33266, 'save=1');
      cm.updateInfoQuest(33266, "save=1;or=0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1540717, "oid=286634729", 280, -40, 1, 230, 330, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286634729", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 120, 50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(4);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.userSetFieldFloating(350063000, 5, 5, 20);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("黑色天堂……正在坠落。", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('必须尽快离开。', 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.userSetFieldFloating(350063000, 0, 0, 20);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(1);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.userSetFieldFloating(350063000, 5, 5, 20);
                        cm.inGameDirectionEvent_MoveAction(4);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(0);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else if (status === V++) {
                            cm.setInGameDirectionMode(false, true, false);
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