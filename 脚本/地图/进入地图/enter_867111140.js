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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=19784435", -570, 93, 1, -620, -520, 0, true, false);
      cm.npc_SetSpecialAction("oid=19784435", "summon", 0, 0);
      cm.npc_ChangeController(9400032, "oid=19784436", -640, 93, 1, -690, -590, 0, true, false);
      cm.npc_SetSpecialAction("oid=19784436", 'summon', 0, 0);
      cm.npc_ChangeController(9400033, "oid=19784437", -700, 93, 1, -750, -650, 0, true, false);
      cm.npc_SetSpecialAction("oid=19784437", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19784438", -780, 93, 1, -830, -730, 0, true, false);
      cm.npc_SetSpecialAction("oid=19784438", 'summon', 0, 0);
      cm.npc_ChangeController(9400035, "oid=19784439", -830, 93, 1, -880, -780, 0, true, false);
      cm.npc_SetSpecialAction("oid=19784439", "summon", 0, 0);
      cm.npc_ChangeController(9400036, "oid=19784440", 0, -30, 6, -50, 50, 1, true, false);
      cm.npc_SetSpecialAction("oid=19784440", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=19784440", "tube1", -1, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 0, 0, 0);
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
                cm.inGameDirectionEvent_AskAnswerTime(4200);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=19784435", 1, 150, 300);
                      cm.inGameDirectionEvent_AskAnswerTime(3200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#怎……怎么办……嘟嘟变成了那样……呜呜", 37, 9400031, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=19784435", 1, 100, 100);
                          cm.npc_SetForceMove("oid=19784436", 1, 150, 300);
                          cm.npc_SetForceMove("oid=19784437", 1, 150, 300);
                          cm.npc_SetForceMove("oid=19784438", 1, 200, 250);
                          cm.npc_SetForceMove("oid=19784439", 1, 150, 290);
                          cm.inGameDirectionEvent_AskAnswerTime(3200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#嘟嘟！！嘟嘟！！是我呀，听到我的声音了吗？听到了吗！振作一点嘟嘟！！", 37, 9400031, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('……', 37, 9400036, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("嘟嘟！没错，是我呀，快变回原来的样子吧！！", 37, 9400031, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("呱呱呱呱呱呱呱呱！！", 37, 9400036, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.setNpcSpecialActionReset("oid=19784440");
                                      cm.npc_SetSpecialAction("oid=19784440", "break", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(2400);
                                    } else {
                                      if (status === V++) {
                                        cm.setNpcSpecialActionReset("oid=19784440");
                                        cm.npc_SetSpecialAction("oid=19784440", "regen", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                      } else {
                                        if (status === V++) {
                                          cm.setNpcSpecialActionReset("oid=19784440");
                                          cm.npc_SetSpecialAction("oid=19784440", "trans", -1, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                              cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 2400, 9400031, 9897148);
                                              cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 2400, 9400032, 9897148);
                                              cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 2400, 9400033, 9897148);
                                              cm.effect_NormalSpeechBalloon('!!!', 1, 0, 0, 2400, 9400034, 9897148);
                                              cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 2400, 9400035, 9897148);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("刚刚看见了吗？宝石一发生变化，嘟嘟就暴走了。", 37, 9400034, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(3000, 10000, 0, -70, -30);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("看来是那个宝石吸收了嘟嘟的灵力并操纵了它的内心。", 37, 9400033, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("啊，嘟嘟的灵力正在急剧减少。", 37, 9400033, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#只要破坏那个就行吗？", 37, 9400032, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#那我们快点破坏那个东西，让嘟嘟恢复吧！", 37, 9400035, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("代号BT，没事吧？", 57, 9400033, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#嗯……只要能让嘟嘟恢复……", 37, 9400031, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("好，那我们就快点帮一下嘟嘟吧。", 37, 9400033, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                          } else if (status === V++) {
                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                            cm.eventSKill(0);
                                                                            cm.warp(867111150, 0);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.setStandAloneMode(false);
                                                                            cm.playerMessage(5, "阻挡暴走的嘟嘟吧！");
                                                                            cm.npc_LeaveField("oid=19784435");
                                                                            cm.npc_LeaveField("oid=19784436");
                                                                            cm.npc_LeaveField("oid=19784437");
                                                                            cm.npc_LeaveField("oid=19784438");
                                                                            cm.npc_LeaveField("oid=19784439");
                                                                            cm.npc_LeaveField("oid=19784440");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;