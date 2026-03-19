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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064210");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201534, "oid=2749021", 260, 212, 12, 210, 310, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2749021", 'summon', 0, 0);
      cm.npc_ChangeController(9201535, "oid=2749022", -100, 212, 2, -150, -50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2749022", "summon", 0, 0);
      cm.npc_ChangeController(9201536, "oid=2749023", -200, 212, 4, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2749023", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=2749021", "attack2", -1, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, 160, 250);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
          cm.inGameDirectionEvent_AskAnswerTime(3200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_BackgroundCanvas(4, 80, 80, 80, 2000, 0, 0);
              cm.fieldEffect_BackgroundCanvas(5, 80, 80, 80, 2000, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(800);
            } else {
              if (status === V++) {
                cm.fieldEffect_BackgroundCanvas(2, 80, 80, 80, 2000, 0, 0);
                cm.fieldEffect_BackgroundCanvas(3, 80, 80, 80, 2000, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.userSetFieldFloating(610064210, 10, 10, 20);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_QTE(0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_OneTimeAction(9, 0);
                        cm.inGameDirectionEvent_QTE(1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_OneTimeAction(5, 0);
                          cm.inGameDirectionEvent_QTE(0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_OneTimeAction(5, 0);
                            cm.inGameDirectionEvent_QTE(1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_OneTimeAction(9, 0);
                              cm.inGameDirectionEvent_QTE(0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_OneTimeAction(5, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else if (status === V++) {
                                cm.eventSKill(0);
                                cm.warp(610064220, 0, true);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.npc_LeaveField("oid=2749021");
                                cm.npc_LeaveField("oid=2749021");
                                cm.npc_LeaveField("oid=2749022");
                                cm.npc_LeaveField("oid=2749022");
                                cm.npc_LeaveField("oid=2749023");
                                cm.npc_LeaveField("oid=2749023");
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