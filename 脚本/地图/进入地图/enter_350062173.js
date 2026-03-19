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
      cm.userSetFieldFloating(350062173, 3, 3, 20);
      cm.setAmbience("Ambience.img/wind", 100, 60);
      cm.npc_ChangeController(1540614, "oid=286519888", 0, 110, 6, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286519888", "summon", 0, 0);
      cm.npc_ChangeController(1540615, "oid=286519889", -170, 16, 34, -220, -120, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286519889", "summon", 0, 0);
      cm.npc_ChangeController(1540616, "oid=286519890", 230, 60, 21, 180, 280, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286519890", "summon", 0, 0);
      cm.npc_ChangeController(1540628, "oid=286519891", 0, -110, 64, -50, 50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286519891", "summon", 0, 0);
      cm.npc_ChangeController(1540761, "oid=286519892", -400, 60, 17, -450, -350, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286519892", 'summon', 0, 0);
      cm.npcMove(1540614, 0, -130, 100);
      cm.npcMove(1540615, 0, -300, 100);
      cm.npcMove(1540616, 0, -300, 100);
      cm.npcMove(1540628, 0, -300, 100);
      cm.npcMove(1540761, 0, -850, 100);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, 0, -200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npcMove(1540614, 0, 30, 1000);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_PushMoveInfo(0, 20, 0, 250);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(100, 1700, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.npcMove(1540614, 0, 100, 3000);
                cm.inGameDirectionEvent_AskAnswerTime(100);
              } else {
                if (status === V++) {
                  cm.npcMove(1540615, 0, 300, 2000);
                  cm.inGameDirectionEvent_AskAnswerTime(150);
                } else {
                  if (status === V++) {
                    cm.npcMove(1540616, 0, 300, 2000);
                    cm.inGameDirectionEvent_AskAnswerTime(200);
                  } else {
                    if (status === V++) {
                      cm.npcMove(1540628, 0, 400, 2000);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(150, 1000, 1500, 0, 150);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.npcMove(1540614, 0, -20, 1500);
                            cm.inGameDirectionEvent_PushMoveInfo(0, 10, 0, 300);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("炸弹实在是太多了！这实在是太勉强了！！", 37, 1540614, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(0, 5, 0, 350);
                              } else {
                                if (status === V++) {
                                  cm.npcMove(1540761, 200, 1700, 2000);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npcMove(1540615, 0, 800, 2000);
                                    cm.npcMove(1540616, 0, 800, 2000);
                                    cm.npc_setForceFlip("oid=286519890", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=286519889", "shoot", -1, 1);
                                      cm.npc_SetSpecialAction("oid=286519890", "shoot", -1, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npcMove(1540761, 800, -1500, 0);
                                        cm.sendNormalTalk_Bottom("如果不想想办法的话！！", 37, 1540614, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npcMove(1540761, -160, 1700, 2000);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.npcMove(1540614, 0, 800, 2000);
                                            cm.npc_setForceFlip("oid=286519888", 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=286519888", "shoot", -1, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('#face1#呃！！', 37, 1540452, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1##fs30##r格里梅尔这家伙！！！！！", 37, 1540452, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npcMove(1540628, 0, 800, 2000);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else if (status === V++) {
                                                        cm.userSetFieldFloating(350062173, 0, 0, 20);
                                                        cm.playSoundEffDirectly("Ambience.img/wind");
                                                        cm.dispose();
                                                        cm.warp(350062200, 0, true);
                                                        cm.npc_LeaveField("oid=286519888");
                                                        cm.npc_LeaveField("oid=286519888");
                                                        cm.npc_LeaveField("oid=286519889");
                                                        cm.npc_LeaveField("oid=286519889");
                                                        cm.npc_LeaveField("oid=286519890");
                                                        cm.npc_LeaveField("oid=286519890");
                                                        cm.npc_LeaveField("oid=286519891");
                                                        cm.npc_LeaveField("oid=286519891");
                                                        cm.npc_LeaveField("oid=286519892");
                                                        cm.npc_LeaveField("oid=286519892");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;