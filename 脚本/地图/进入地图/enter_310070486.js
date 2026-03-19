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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 3700, -500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1200, 0, 3700, -500);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(2155114, "oid=45425439", 3699, -572, 23, 3649, 3749, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=45425439", "summon", 0, 0);
            cm.npc_ChangeController(2155111, "oid=45425440", 4203, -273, 27, 4153, 4253, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=45425440", "summon", 0, 0);
            cm.npc_ChangeController(2155112, "oid=45425441", 3070, -5, 32, 3020, 3120, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=45425441", "summon", 0, 0);
            cm.npc_setForceFlip("oid=45425439", 1);
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('呼…应该不会迟到吧？', 37, 2155114, false, true);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=45425439", -1);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=45425439", 1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("如果这次再迟到，会被判定为不良品吗？\r\n如果没有秘密通道，我可能真的会被分解的。", 37, 2155114, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=45425439"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('啊，那是什么啊？', 37, 2155114, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(200, 0, 2500, 200, 4200, -200);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("喵…喵呜，喵……", 37, 2155111, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 3700, -500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("小猫？这里怎么会有小猫？\r\n这里很危险，快……", 37, 2155114, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=45425439", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=45425439"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=45425441", 1, 360, 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 200, 3300, -150);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 2300, 3450, 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 3700, -500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("该死，偏偏在这时候出现超级人造人！\r\n啊，怎么办？", 37, 2155114, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 200, 3450, 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=45425441"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 200, 4200, -150);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 200, 3550, 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("…？发现小猫。", 37, 2155112, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("按照规定，必须处理掉不需要的生物…", 37, 2155112, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                        cm.inGameDirectionEvent_PushScaleInfo(200, 0, 2500, 200, 4200, -200);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npcMove(2155111, -50, 400, 500);
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                            cm.sendNormalTalk_Bottom("喵呜！", 37, 2155111, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_LeaveField("oid=45425440");
                                                                                cm.npc_LeaveField("oid=45425440");
                                                                                cm.npc_LeaveField("oid=45425441");
                                                                                cm.npc_LeaveField("oid=45425441");
                                                                                cm.npc_ChangeController(2155112, "oid=45429269", 4160, -5, 31, 4110, 4210, 1, true, 0, false);
                                                                                cm.npc_SetSpecialAction("oid=45429269", "summon", 0, 0);
                                                                                cm.npc_SetSpecialAction("oid=45429269", "slide", -1, 1);
                                                                                cm.npc_setForceFlip("oid=45425439", 1);
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 4100, 50);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("喵呜？", 37, 2155110, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayBGM("Bgm41.img/PromiseOfHeaven_vocaless", 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("噢？…………", 37, 2155114, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2600, 0, 4120, 50);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("呼呼…", 37, 2155112, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2650, 0, 4150, 50);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom('喵！', 37, 2155110, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 3700, -500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("什么啊…那个超级人造人…？", 37, 2155114, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 4000, 0, 4150, 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(1250, 0, 4050, 0, 4150, 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("嗯…。\r\n嗯…。\r\n为什么我…", 37, 2155112, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("喵喵呜~\r\n咔哈呜。", 37, 2155110, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 4150, 0, 4150, 100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom('嗯，嗯。', 37, 2155112, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 4150, 0, 3700, -500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(1250, 0, 4200, 0, 3700, -500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom('(…咯噔……)', 37, 2155114, false, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_LeaveField("oid=45429269");
                                                                                                                              cm.npc_LeaveField("oid=45429269");
                                                                                                                              cm.npc_ChangeController(2155112, "oid=45431195", 3950, -5, 28, 3900, 4000, 1, true, 0, false);
                                                                                                                              cm.npc_SetSpecialAction("oid=45431195", "summon", 0, 0);
                                                                                                                              cm.npc_ChangeController(2155110, "oid=45431196", 4068, -5, 30, 4018, 4118, 1, false, 0, false);
                                                                                                                              cm.npc_SetSpecialAction("oid=45431196", "summon", 0, 0);
                                                                                                                              cm.npc_setForceFlip("oid=45431195", 1);
                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 3950, 50);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1100, 1, 0, 0, 0, 4, 2155112, null, cm.getPlayer().getId());
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("…认知为可能会需要的生物。\r\n我，嗯…按照我之前的路继续走。", 37, 2155112, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_setForceFlip("oid=45431195", -1);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=45431196"], [0, 0, 40, 1, 0, 1, 0, 0]);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_SetForceMove("oid=45431195", -1, 50, 120);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("喵？喵呜？", 37, 2155110, false, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_setForceFlip("oid=45431195", 1);
                                                                                                                                                cm.sendNormalTalk_Bottom("停…停下！希望你别再跟着我了。", 37, 2155112, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=45431196"], [0, 0, 40, 1, 0, 1, 0, 0]);
                                                                                                                                                  cm.sendNormalTalk_Bottom('喵？', 37, 2155110, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("我可能会把你认知为不需要的生物。\r\n希望你不要跟着我了。请回去吧。", 37, 2155112, false, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom('…喵', 37, 2155110, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(300, 0, 1500, 300, 3700, -500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("呼，好可爱，你们俩。", 37, 2155114, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=45425439"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.npc_setForceFlip("oid=45425439", -1);
                                                                                                                                                                cm.sendNormalTalk_Bottom("嗯？我对超级人造人说了什么啊！", 37, 2155114, false, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.npc_setForceFlip("oid=45431195", -1);
                                                                                                                                                                  cm.npc_SetForceMove("oid=45431195", -1, 360, 150);
                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 300, 3550, 50);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 1000, 3450, 50);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(300, 0, 1500, 300, 3700, -500);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("啊……", 37, 2155114, false, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("喂！！超级人造人！", 37, 2155114, false, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.npc_SetForceMove("oid=45425439", -1, 360, 250);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                    cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                                                                                                                                    cm.warp(310070487, 0, false);
                                                                                                                                                                                    cm.eventSKill(0);
                                                                                                                                                                                    cm.npc_LeaveField("oid=45425439");
                                                                                                                                                                                    cm.npc_LeaveField("oid=45425439");
                                                                                                                                                                                    cm.npc_LeaveField("oid=45431195");
                                                                                                                                                                                    cm.npc_LeaveField("oid=45431195");
                                                                                                                                                                                    cm.npc_LeaveField("oid=45431196");
                                                                                                                                                                                    cm.npc_LeaveField("oid=45431196");
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