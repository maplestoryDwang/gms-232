var status = -1;
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400047, "oid=1709394", 552, 708, 0);
      cm.npc_SetSpecialAction("oid=1709394", 'summon');
      cm.npc_ChangeController(9400048, "oid=1709395", 356, 708, 0);
      cm.npc_SetSpecialAction("oid=1709395", 'summon');
      cm.npc_ChangeController(9400036, "oid=1709396", 940, 708, 1);
      cm.npc_SetSpecialAction("oid=1709396", "summon");
      cm.inGameDirectionEvent_AskAnswerTime(4200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.effect_Text(["#fn黑体##fs18#嘟嘟失踪1个小时前"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=1709394"], [0, 0, 0, 1, 0, 1, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=1709396"], [0, 0, 0, 1, 0, 1, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(2400);
        } else {
          if (status === V++) {
            cm.sendNextNoESC_Bottom("哈哈哈，嘟嘟，谢谢你今天和我一起玩，真是太有趣了！", 9400047);
          } else {
            if (status === V++) {
              cm.effect_Voice("PL_3min.img/direction/frog_cry");
              cm.sendNextNoESC_Bottom("晚安，嘟嘟。明天见。", 9400048);
            } else {
              if (status === V++) {
                cm.effect_Voice("PL_3min.img/direction/frog_cry");
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=1709394", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=1709395", -1);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNextNoESC_Bottom("呱呱呱呱！", 9400036);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("SoundEff.img/thunder2");
                            cm.effect_Voice("PL_3min.img/direction/frog_shout");
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=1709396");
                              cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Voice("SoundEff.img/thunder3");
                                        cm.fieldEffect_PlayBGM("Bgm05.img/WolfWood");
                                        cm.npc_setForceFlip("oid=1709394", 1);
                                        cm.sendNextNoESC_Bottom("这是什么声音？", 9400047);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=1709395", 1);
                                          cm.sendNextNoESC_Bottom("嘟嘟的声音！", 9400048);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(9400039, "oid=1709975", 2257, 375, 1);
                                              cm.npc_SetSpecialAction("oid=1709975", "summon");
                                              cm.npc_ChangeController(9400041, "oid=1709976", 2523, 375, 1);
                                              cm.npc_SetSpecialAction("oid=1709976", "summon");
                                              cm.npc_ChangeController(9400036, "oid=1709977", 2381, 375, 1);
                                              cm.npc_SetSpecialAction("oid=1709977", "summon");
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushMoveInfo(0, 300, 2000, 300);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(4469);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(200, 1500, 500, 2200, 300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
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
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff/emotionBalloon/exclamation3", "oid=1709977"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=1709975", 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_LeaveField("oid=1709975");
                                                                    cm.npc_LeaveField("oid=1709976");
                                                                    cm.npc_LeaveField("oid=1709977");
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNextNoESC_Bottom("糟糕了！我得告诉大家！", 9400048);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence");
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                            } else if (status === V++) {
                                                                              cm.inGameDirectionEvent_SetHideEffect(0);
                                                                              cm.warp(867111001, 0, true);
                                                                              cm.setInGameDirectionMode(false, false, false);
                                                                              cm.setStandAloneMode(false);
                                                                              cm.npc_LeaveField("oid=1709394");
                                                                              cm.npc_LeaveField("oid=1709395");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;