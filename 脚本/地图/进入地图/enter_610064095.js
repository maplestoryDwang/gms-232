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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064095");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201536, "oid=2745670", 413, 273, 24, 363, 463, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2745670", 'summon', 0, 0);
      cm.npc_ChangeController(9201566, "oid=2745671", -283, 273, 10, -333, -233, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2745671", "summon", 0, 0);
      cm.npc_ChangeController(9201567, "oid=2745672", -380, 273, 2, -430, -330, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2745672", "summon", 0, 0);
      cm.npc_ChangeController(9201566, "oid=2745673", -480, 273, 1, -530, -430, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2745673", 'summon', 0, 0);
      cm.npc_ChangeController(9201567, "oid=2745674", -555, 273, 4, -605, -505, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2745674", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 95, 300);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你先走。", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('你确定？', 37, 9201536, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("绯红之心需要你的帮助。这些家伙我应付得来，去吧。", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("谢谢你。\r\n要小心啊！", 37, 9201536, true, true);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=2745670", 1, 400, 200);
                      cm.inGameDirectionEvent_AskAnswerTime(3200);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=2745670");
                        cm.npc_LeaveField("oid=2745670");
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(-1);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else if (status === V++) {
                                cm.eventSKill(0);
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
  }
}