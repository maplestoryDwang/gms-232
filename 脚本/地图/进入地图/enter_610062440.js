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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062440");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.setAmbience("Ambience.img/rain", 100, 60);
      cm.npc_ChangeController(9201546, "oid=2692132", 266, 200, 44, 216, 316, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2692132", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=2692132", 'dead', -1, 1);
      cm.npc_ChangeController(9201535, "oid=2692133", 180, 200, 10, 130, 230, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2692133", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2692133", "cry", -1, 1);
      cm.inGameDirectionEvent_AskAnswerTime(2200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 200, 200, 250);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(4227);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#纳瑞坎……苏巴尼……", 37, 9201535, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 200, 250);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#对不起……", 37, 9201535, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(0, 100, 200, -1450);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(6200);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else if (status === V++) {
                                      cm.eventSKill(0);
                                      cm.warp(610062450, 0, true);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.npc_LeaveField("oid=2692132");
                                      cm.npc_LeaveField("oid=2692132");
                                      cm.npc_LeaveField("oid=2692133");
                                      cm.npc_LeaveField("oid=2692133");
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
    }
  }
}