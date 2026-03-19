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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064170");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201534, "oid=2747927", 339, 212, 14, 289, 389, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2747927", "summon", 0, 0);
      cm.npc_ChangeController(9201535, "oid=2747928", -100, 212, 2, -150, -50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2747928", "summon", 0, 0);
      cm.npc_ChangeController(9201536, "oid=2747929", -200, 212, 4, -250, -150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2747929", "summon", 0, 0);
      cm.npc_ChangeController(9201580, "oid=2747930", 150, 212, 9, 100, 200, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2747930", "summon", 0, 0);
      cm.npc_ChangeController(9201580, "oid=2747931", 200, 212, 12, 150, 250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2747931", 'summon', 0, 0);
      cm.npc_ChangeController(9201580, "oid=2747932", 250, 212, 12, 200, 300, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2747932", 'summon', 0, 0);
      cm.npc_ChangeController(9201580, "oid=2747933", 350, 212, 14, 300, 400, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2747933", "summon", 0, 0);
      cm.npc_ChangeController(9201580, "oid=2747934", 400, 212, 5, 350, 450, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2747934", "summon", 0, 0);
      cm.npc_ChangeController(9201580, "oid=2747935", -52, 212, 3, -102, -2, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2747935", "summon", 0, 0);
      cm.npc_ChangeController(9201580, "oid=2747936", -280, 212, 10, -330, -230, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2747936", 'summon', 0, 0);
      cm.npc_ChangeController(9201580, "oid=2747937", -320, 212, 10, -370, -270, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2747937", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=2747928", 'attack', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=2747935", "hurt", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_LeaveField("oid=2747935");
          cm.npc_LeaveField("oid=2747935");
          cm.npc_SetSpecialAction("oid=2747929", "attack", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=2747936", "hurt", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_LeaveField("oid=2747936");
              cm.npc_LeaveField("oid=2747936");
              cm.npc_setForceFlip("oid=2747928", -1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=2747928", 'attack', 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=2747937", "hurt", 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_LeaveField("oid=2747937");
                    cm.npc_LeaveField("oid=2747937");
                    cm.npc_setForceFlip("oid=2747929", 1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=2747928", 1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_SetHideEffect(0);
                        cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=2747930", -1, 30, 300);
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 20);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_QTE(2);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_OneTimeAction(9, 0);
                              cm.npc_SetSpecialAction("oid=2747930", "hurt", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=2747930");
                                cm.npc_LeaveField("oid=2747930");
                                cm.npc_SetForceMove("oid=2747931", -1, 50, 300);
                                cm.inGameDirectionEvent_同时移动镜头和人(2, 20);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_QTE(3);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_OneTimeAction(5, 0);
                                    cm.npc_SetSpecialAction("oid=2747931", "hurt", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=2747931");
                                      cm.npc_LeaveField("oid=2747931");
                                      cm.npc_SetForceMove("oid=2747932", -1, 70, 300);
                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 20);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_QTE(4);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_OneTimeAction(5, 0);
                                          cm.npc_SetSpecialAction("oid=2747932", "hurt", 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=2747933", -1, 100, 300);
                                            cm.npc_LeaveField("oid=2747932");
                                            cm.npc_LeaveField("oid=2747932");
                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 20);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_QTE(7);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_OneTimeAction(9, 0);
                                                cm.npc_SetSpecialAction("oid=2747933", "hurt", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=2747934", -1, 120, 300);
                                                  cm.npc_LeaveField("oid=2747933");
                                                  cm.npc_LeaveField("oid=2747933");
                                                  cm.inGameDirectionEvent_QTE(3);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_OneTimeAction(9, 0);
                                                    cm.npc_SetSpecialAction("oid=2747934", 'hurt', 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_LeaveField("oid=2747934");
                                                      cm.npc_LeaveField("oid=2747934");
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=2747927", -1, 50, 50);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                      } else if (status === V++) {
                                                        cm.eventSKill(0);
                                                        cm.warp(610064180, 0, true);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.npc_LeaveField("oid=2747927");
                                                        cm.npc_LeaveField("oid=2747927");
                                                        cm.npc_LeaveField("oid=2747928");
                                                        cm.npc_LeaveField("oid=2747928");
                                                        cm.npc_LeaveField("oid=2747929");
                                                        cm.npc_LeaveField("oid=2747929");
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
                }
              }
            }
          }
        }
      }
    }
  }
}