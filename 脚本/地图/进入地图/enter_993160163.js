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
      cm.npc_ChangeController(3001698, "oid=430796", 415, 813, 22, 365, 465, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 415, 805);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#不要……呱呱，干净的空气。", 37, 3001698, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#给我脏东西，呱呱……多给点。", 37, 3001698, true, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#那家伙是个四处寻找肮脏角落的青蛙怪，\r\n可能是因为一直住在垃圾堆里，就连它自己也沦为了垃圾。", 37, 3001651, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face8#哎哟……这股恶臭……实在忍无可忍，赶紧收拾干净吧。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else if (status === V++) {
                                cm.warp(993161700, 0, false);
                                cm.setStandAloneMode(false);
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.playerMessage(5, "为了回收饕餮的魂魄，需要击退怪物。");
                                cm.getTopMsgFont("为了回收饕餮的魂魄，必须击退怪物。", 3, 20, 4, 0, 0);
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
  }
}