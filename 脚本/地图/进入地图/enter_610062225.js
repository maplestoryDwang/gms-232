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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062225");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9201559, "oid=2677408", -320, 380, 7, -370, -270, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2677408", "summon", 0, 0);
        cm.npc_ChangeController(9201562, "oid=2677409", -680, 380, 2, -730, -630, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=2677409", "summon", 0, 0);
        cm.npc_ChangeController(9201563, "oid=2677410", -73, 380, 13, -123, -23, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=2677410", "summon", 0, 0);
        cm.npc_ChangeController(9201564, "oid=2677411", -140, 380, 10, -190, -90, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=2677411", "summon", 0, 0);
        cm.npc_ChangeController(9201565, "oid=2677412", -5, 380, 13, -55, 45, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2677412", "summon", 0, 0);
        cm.npc_ChangeController(9201566, "oid=2677413", -112, 380, 10, -162, -62, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2677413", "summon", 0, 0);
        cm.npc_ChangeController(9201566, "oid=2677414", -230, 380, 6, -280, -180, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2677414", "summon", 0, 0);
        cm.npc_ChangeController(9201566, "oid=2677415", -760, 380, 1, -810, -710, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2677415", 'summon', 0, 0);
        cm.npc_ChangeController(9201567, "oid=2677416", -140, 380, 10, -190, -90, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2677416", "summon", 0, 0);
        cm.npc_ChangeController(9201567, "oid=2677417", -490, 380, 8, -540, -440, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2677417", "summon", 0, 0);
        cm.npc_ChangeController(9201567, "oid=2677418", 130, 380, 14, 80, 180, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2677418", "summon", 0, 0);
        cm.npc_ChangeController(9201567, "oid=2677419", -250, 380, 6, -300, -200, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2677419", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2677408", 'hurt', -1, 0);
        cm.npc_SetSpecialAction("oid=2677409", 'hurt', -1, 0);
        cm.forceCompleteQuest(61348);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.fieldEffect_BackgroundCanvas(1, 80, 80, 80, 2000, 0, 0);
            cm.fieldEffect_BackgroundCanvas(4, 125, 125, 125, 2000, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(800);
          } else {
            if (status === V++) {
              cm.fieldEffect_BackgroundCanvas(2, 80, 80, 80, 2000, 0, 0);
              cm.fieldEffect_BackgroundCanvas(3, 80, 80, 80, 2000, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2200);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('啊啊啊！', 37, 9201564, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("救命啊！", 37, 9201563, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("守护者的要塞的战士们……求你们救救我们！", 37, 9201559, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(9201539, "oid=2677605", -915, 380, 4, -965, -865, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2677605", "summon", 0, 0);
                            cm.npc_ChangeController(9201534, "oid=2677606", -915, 380, 4, -965, -865, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2677606", "summon", 0, 0);
                            cm.npc_SetForceMove("oid=2677605", 1, 150, 100);
                            cm.npc_SetForceMove("oid=2677606", 1, 250, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(4200);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face5#这下你就有属于自己的军队了。", 37, 9201539, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=2677606", -1);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#你真是个名副其实的天才。\r\n很快，守护者的要塞就会如风中细枝那般凋零了。", 37, 9201534, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=2677606", 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#相比之下，我最初的计划显得如此……粗糙。", 37, 9201534, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face5#……", 37, 9201539, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=2677606", -1);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("博士，你的头发……", 37, 9201534, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face5#哦，没事，估计是在森林里的时候弄的。", 37, 9201539, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_setForceFlip("oid=2677605", -1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#看上去乱的厉害吧，我知道。", 37, 9201539, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=2677606", 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("不，我倒是觉得挺有魅力的。", 37, 9201534, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=2677605", 1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                      cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201539, null, cm.getPlayer().getId());
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("该谈正事了。", 37, 9201534, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("我并不喜欢牺牲克拉奇安人这一行为。", 37, 9201534, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=2677606", -1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=2677605", -1);
                                                                              cm.npc_SetForceMove("oid=2677606", -1, 230, 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=2677605", -1, 150, 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_LeaveField("oid=2677606");
                                                                                  cm.npc_LeaveField("oid=2677606");
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_LeaveField("oid=2677605");
                                                                                    cm.npc_LeaveField("oid=2677605");
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                  } else if (status === V++) {
                                                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                    cm.eventSKill(0);
                                                                                    cm.warp(610062230, 0, false);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.npc_LeaveField("oid=2677408");
                                                                                    cm.npc_LeaveField("oid=2677408");
                                                                                    cm.npc_LeaveField("oid=2677409");
                                                                                    cm.npc_LeaveField("oid=2677409");
                                                                                    cm.npc_LeaveField("oid=2677410");
                                                                                    cm.npc_LeaveField("oid=2677410");
                                                                                    cm.npc_LeaveField("oid=2677411");
                                                                                    cm.npc_LeaveField("oid=2677411");
                                                                                    cm.npc_LeaveField("oid=2677412");
                                                                                    cm.npc_LeaveField("oid=2677412");
                                                                                    cm.npc_LeaveField("oid=2677413");
                                                                                    cm.npc_LeaveField("oid=2677413");
                                                                                    cm.npc_LeaveField("oid=2677414");
                                                                                    cm.npc_LeaveField("oid=2677414");
                                                                                    cm.npc_LeaveField("oid=2677415");
                                                                                    cm.npc_LeaveField("oid=2677415");
                                                                                    cm.npc_LeaveField("oid=2677416");
                                                                                    cm.npc_LeaveField("oid=2677416");
                                                                                    cm.npc_LeaveField("oid=2677417");
                                                                                    cm.npc_LeaveField("oid=2677417");
                                                                                    cm.npc_LeaveField("oid=2677418");
                                                                                    cm.npc_LeaveField("oid=2677418");
                                                                                    cm.npc_LeaveField("oid=2677419");
                                                                                    cm.npc_LeaveField("oid=2677419");
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