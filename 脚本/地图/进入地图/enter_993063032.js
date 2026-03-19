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
      cm.npc_ChangeController(3003713, "oid=277104", -32, 206, 8, -82, 18, 1, false, 0, false);
      cm.npc_ChangeController(3003781, "oid=277105", 800, 206, 17, 750, 850, 1, false, 0, false);
      cm.npc_ChangeController(3003784, "oid=277106", 865, 206, 14, 815, 915, 0, false, 0, false);
      cm.npc_ChangeController(3003785, "oid=277107", 369, 206, 11, 319, 419, 1, false, 0, false);
      cm.npc_ChangeController(3003782, "oid=277108", 450, 206, 11, 400, 500, 0, false, 0, false);
      cm.npc_ChangeController(3003783, 'oid=277109', 107, 206, 5, 57, 157, 1, false, 0, false);
      cm.npc_ChangeController(3003786, "oid=277110", 181, 206, 2, 131, 231, 0, false, 0, false);
      cm.npc_ChangeController(3003722, "oid=277111", 107, 206, 5, 57, 157, 1, false, 0, false);
      cm.npc_ChangeController(3003721, "oid=277112", 800, 206, 17, 750, 850, 1, false, 0, false);
      cm.npc_ChangeController(3003722, 'oid=277113', 865, 206, 14, 815, 915, 1, false, 0, false);
      cm.npc_ChangeController(3003723, 'oid=277114', 369, 206, 11, 319, 419, 1, false, 0, false);
      cm.npc_ChangeController(3003721, 'oid=277115', 450, 206, 11, 400, 500, 1, false, 0, false);
      cm.npc_ChangeController(3003723, 'oid=277116', 181, 206, 2, 131, 231, 1, false, 0, false);
      cm.updateInfoQuest(35757, "enter=993063032;do=ing");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, 307, 90);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('……', 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#你到底是运气不好……还是……", 37, 3003770, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#死亡在追随#h0#……", 37, 3003770, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                              cm.setStandAloneMode(false);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.updateInfoQuest(35720, "enterdir=end");
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