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
      cm.updateInfoQuest(58712, "0=1;1=1;2=3;3=1;4=1;5=1;6=1");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9111028, "oid=3836197", 0, -40, 23, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3836197", 'summon', 0, 0);
      cm.npc_ChangeController(9111028, "oid=3836198", 100, -40, 20, 50, 150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3836198", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3836199", -500, -40, 11, -550, -450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3836199", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3836200", -440, -40, 12, -490, -390, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3836200", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 500, -200);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -400, -200);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(6000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(9111030, "oid=3836543", -113, -40, 19, -163, -63, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=3836543", "summon", 0, 0);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -400, -200);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=3836197", "die", 0, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=3836199", "die", 0, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(100);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=3836200", "die", 0, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=3836198", "die", 0, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=3836197");
                                      cm.npc_LeaveField("oid=3836197");
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=3836199");
                                        cm.npc_LeaveField("oid=3836199");
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=3836200");
                                          cm.npc_LeaveField("oid=3836200");
                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_LeaveField("oid=3836198");
                                            cm.npc_LeaveField("oid=3836198");
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_ChangeController(9111013, "oid=3836977", 425, 85, 42, 375, 475, 0, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=3836977", "summon", 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 200, -230);
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
                                                          cm.npc_SetForceMove("oid=3836977", -1, 10, 100);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3836977"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetSpecialAction("oid=3836543", "stand2", 0, 1);
                                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, -300, -230);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#哈啊……", 37, 9111001, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_ChangeController(9111008, "oid=3837362", -345, -40, 22, -395, -295, 0, true, 0, false);
                                                                    cm.npc_SetSpecialAction("oid=3837362", 'summon', 0, 0);
                                                                    cm.sendNormalTalk_Bottom("#face0#……回去吧。很晚了。", 37, 9111008, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetForceMove("oid=3836977", 1, 100, 100);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_LeaveField("oid=3836977");
                                                                        cm.npc_LeaveField("oid=3836977");
                                                                        cm.npc_ChangeController(9111013, "oid=3837519", 470, -40, 15, 420, 520, 1, true, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=3837519", "summon", 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#……嗯。谢谢你的帮助。", 37, 9111001, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, 400, -30);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#…………", 37, 9111013, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetSpecialAction("oid=3837519", 'morph', 0, 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_LeaveField("oid=3837519");
                                                                                      cm.npc_LeaveField("oid=3837519");
                                                                                      cm.npc_ChangeController(9111004, "oid=3837759", 470, -50, 15, 420, 520, 1, true, 0, false);
                                                                                      cm.npc_SetSpecialAction("oid=3837759", "summon", 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#…………", 37, 9111004, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face2#……好美啊……。", 37, 9111004, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_LeaveField("oid=3836543");
                                                                                                cm.npc_LeaveField("oid=3836543");
                                                                                                cm.npc_LeaveField("oid=3837362");
                                                                                                cm.npc_LeaveField("oid=3837362");
                                                                                                cm.npc_LeaveField("oid=3837759");
                                                                                                cm.npc_LeaveField("oid=3837759");
                                                                                                cm.inGameDirectionEvent_Monologue("「地之五行自己送上门了。快抢过来！」", 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else if (status === V++) {
                                                                                                  cm.eventSKill(0);
                                                                                                  cm.warp(800023001, 0, false);
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
        }
      }
    }
  }
}