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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062420");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201546, "oid=2689267", 266, 200, 44, 216, 316, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2689267", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=2689267", "dead", -1, 1);
      cm.sendNormalTalk_Bottom("呼……呼……终于杀光了……", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(9201535, "oid=2689273", -350, 200, 4, -400, -300, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2689273", "summon", 0, 0);
          cm.npc_ChangeController(9201547, "oid=2689274", -400, 200, 6, -450, -350, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2689274", 'summon', 0, 0);
          cm.npc_ChangeController(9201548, "oid=2689275", -420, 200, 6, -470, -370, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2689275", 'summon', 0, 0);
          cm.npc_ChangeController(9201549, "oid=2689276", -468, 200, 3, -518, -418, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2689276", "summon", 0, 0);
          cm.npc_ChangeController(9201536, "oid=2689277", -490, 200, 3, -540, -440, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2689277", "summon", 0, 0);
          cm.sendNormalTalk_Bottom("苏巴尼！", 37, 9201535, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("绯红之心！", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=2689273", 1, 480, 300);
                  cm.npc_SetForceMove("oid=2689274", 1, 350, 200);
                  cm.npc_SetForceMove("oid=2689275", 1, 250, 150);
                  cm.npc_SetForceMove("oid=2689276", 1, 350, 100);
                  cm.npc_SetForceMove("oid=2689277", 1, 500, 200);
                  cm.inGameDirectionEvent_AskAnswerTime(5200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 150, 250);
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
                            cm.sendNormalTalk_Bottom("#face1#这是怎么……", 37, 9201547, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("我很抱歉……纳瑞坎……纳瑞坎欺骗了苏巴尼……要是我能更强一点……我就能保护他了……", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#苏巴尼！不……！", 37, 9201536, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("我……我明明告诫过你，但……还是没用吗！", 37, 9201547, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 20);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("对不起，我没能守护住他。", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#这不是你的错，这不是任何人的错，除了……", 37, 9201535, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=2689273", -1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#拜托了，让我和他单独呆会儿。\r\n苏巴尼……不喜欢太多人看着他。", 37, 9201535, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=2689277", 1, 20, 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#绯红之心……我不知道说什么好……", 37, 9201536, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=2689276", -1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("我们先走吧。\r\n给他们点空间。", 37, 9201549, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 500);
                                                                  cm.npc_SetForceMove("oid=2689274", -1, 550, 150);
                                                                  cm.npc_SetForceMove("oid=2689275", -1, 400, 150);
                                                                  cm.npc_SetForceMove("oid=2689277", -1, 500, 150);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=2689276", -1, 10, 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=2689276", 0);
                                                                      cm.inGameDirectionEvent_SetHideEffect(1);
                                                                      cm.npc_LeaveField("oid=2689274");
                                                                      cm.npc_LeaveField("oid=2689274");
                                                                      cm.npc_LeaveField("oid=2689275");
                                                                      cm.npc_LeaveField("oid=2689275");
                                                                      cm.npc_LeaveField("oid=2689277");
                                                                      cm.npc_LeaveField("oid=2689277");
                                                                      cm.npc_setForceFlip("oid=2689273", 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_setForceFlip("oid=2689276", 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                        cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201549, null, cm.getPlayer().getId());
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_setForceFlip("oid=2689276", -1);
                                                                          cm.npc_SetForceMove("oid=2689276", -1, 300, 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_LeaveField("oid=2689276");
                                                                            cm.npc_LeaveField("oid=2689276");
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                          } else if (status === V++) {
                                                                            cm.eventSKill(0);
                                                                            cm.warp(610062430, 0, true);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.npc_LeaveField("oid=2689267");
                                                                            cm.npc_LeaveField("oid=2689267");
                                                                            cm.npc_LeaveField("oid=2689273");
                                                                            cm.npc_LeaveField("oid=2689273");
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