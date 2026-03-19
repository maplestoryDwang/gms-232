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
      cm.npc_ChangeController(9400932, "oid=262116", -234, 318, 23, -284, -205, 5, true, 0, false);
      cm.npc_ChangeController(9400933, "oid=262117", -173, 318, 26, -173, -123, 5, true, 0, false);
      cm.npc_ChangeController(9400934, "oid=262118", -98, 318, 26, -148, -48, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -350, 400]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9400928, "oid=91880881", -350, 300, 23, -400, -300, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=91880881", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=91880881", "flop", -1, 0);
        cm.npc_ChangeController(9400929, "oid=91880882", -700, 300, 24, -750, -650, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=91880882", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=91880882", 1, 240, 150);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=91880882", "care", -1, 0);
              cm.sendNormalTalk_Bottom("#face5#艾米！艾米，醒醒！", 37, 9400921, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face5#……哥……哥……", 37, 9400920, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face5#没错，艾米！是哥哥！哥哥又给你做果汁了！", 37, 9400921, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face5#……果……汁……", 37, 9400920, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face5#快喝吧！", 37, 9400921, true, true);
                      } else {
                        if (status === V++) {
                          cm.setNpcSpecialActionReset("oid=91880881");
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink", 128);
                            cm.npc_SetSpecialAction("oid=91880881", "drink", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink", 128);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=91880881", 'juice', -1, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.setNpcSpecialActionReset("oid=91880882");
                                  cm.sendNormalTalk_Bottom("#face5#…", 37, 9400920, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#怎，怎么样？", 37, 9400921, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face5#不是的……", 37, 9400920, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.setNpcSpecialActionReset("oid=91880881");
                                          cm.sendNormalTalk_Bottom("#face5#不是……这个味道……", 37, 9400920, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/flop", 100);
                                            cm.npc_SetSpecialAction("oid=91880881", "flop", -1, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face5#酸酸……甜甜……凉爽……那个果汁……芒果……荔枝……柠檬……？", 37, 9400920, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#b究竟……发生什么事情了？", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#那个……", 37, 9400921, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#前不久，你们不是一起去金海滩了吗？", 37, 9400923, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#b嗯，没错。", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#艾米不是在那里喝了热带水果汁吗？", 37, 9400923, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#b嗯……怎么了……？", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#就是因为艾米一直无法忘记那时喝过的甜甜~热带水果汁的味道，现在才会这样的！", 37, 9400923, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#b啊？！", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#很严重……相思病。越来越严重。", 37, 9400924, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face5#炎热的……太阳……甜蜜的……果汁……", 37, 9400920, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                      cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9400929, null, cm.getPlayer().getId());
                                                                      cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9400932, null, cm.getPlayer().getId());
                                                                      cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9400933, null, cm.getPlayer().getId());
                                                                      cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9400934, null, cm.getPlayer().getId());
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#b所以埃尔才亲自制作果汁吗？", 57, 0, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_setForceFlip("oid=91880882", -1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#对的……我觉得味道跟那时已经很相似了，她还说不一样。", 37, 9400921, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#b那我去金海滩买回来好了。", 57, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#不可以！#h0#这么繁忙，怎么能拜托你……不喝又不是会死……", 37, 9400921, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#很严重。", 37, 9400924, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#同意同意。不能以我们常人的眼光判断艾米。", 37, 9400923, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face5#嗯……", 37, 9400921, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face5##h0，那我就厚颜无耻的拜托你了。", 37, 9400921, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#b包在我身上！这可是朋友的事情。", 57, 0, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.forceCompleteQuest(501024);
                                                                                            cm.updateInfoQuest(65433, "start=1");
                                                                                            cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNewEffects(19, [0]);
                                                                                            } else if (status === V++) {
                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                              cm.warp(871000000, 2, true);
                                                                                              cm.eventSKill(0);
                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                              cm.npc_LeaveField("oid=91880881");
                                                                                              cm.npc_LeaveField("oid=91880882");
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