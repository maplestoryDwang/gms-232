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
      cm.setInGameDirectionMode(true, false, true);
      cm.onSetMapObjectMove("snow", [1, 0, 0]);
      cm.npc_ChangeController(9400676, "oid=7627875", 3900, 250, 37, 3850, 3950, 1, true, false);
      cm.npc_SetSpecialAction("oid=7627875", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7627876", 3820, 250, 38, 3770, 3870, 1, true, false);
      cm.npc_SetSpecialAction("oid=7627876", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7627877", 3750, 250, 39, 3700, 3800, 1, true, false);
      cm.npc_SetSpecialAction("oid=7627877", 'summon', 0, 0);
      cm.npc_ChangeController(9400676, "oid=7627878", 3650, 250, 47, 3600, 3700, 1, true, false);
      cm.npc_SetSpecialAction("oid=7627878", 'summon', 0, 0);
      cm.npc_ChangeController(9400642, "oid=7627879", 3580, 250, 46, 3530, 3630, 1, true, false);
      cm.npc_SetSpecialAction("oid=7627879", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7627880", 3500, 250, 42, 3450, 3550, 1, true, false);
      cm.npc_SetSpecialAction("oid=7627880", "summon", 0, 0);
      cm.npc_ChangeController(9400676, "oid=7627881", 3420, 250, 40, 3370, 3470, 1, true, false);
      cm.npc_SetSpecialAction("oid=7627881", "summon", 0, 0);
      cm.npc_ChangeController(9400675, "oid=7627882", 3350, 250, 40, 3300, 3400, 1, true, false);
      cm.npc_SetSpecialAction("oid=7627882", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7627883", 3210, 250, 44, 3160, 3260, 1, true, false);
      cm.npc_SetSpecialAction("oid=7627883", 'summon', 0, 0);
      cm.npc_SetForceMove("oid=7627875", -1, 500, 10);
      cm.npc_SetForceMove("oid=7627876", -1, 500, 10);
      cm.npc_SetForceMove("oid=7627877", -1, 500, 10);
      cm.npc_SetForceMove("oid=7627878", -1, 500, 10);
      cm.npc_SetForceMove("oid=7627879", -1, 500, 10);
      cm.npc_SetForceMove("oid=7627880", -1, 500, 10);
      cm.npc_SetForceMove("oid=7627881", -1, 500, 10);
      cm.npc_SetForceMove("oid=7627882", -1, 500, 10);
      cm.npc_SetForceMove("oid=7627883", -1, 500, 10);
      cm.setPartner(1, 9400580, 80011692, 0);
      cm.forceForfeitQuest(64162);
      cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
        cm.sendNewEffects(12, [2000, 3300, 124, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/monsterfootstep_loop", 128);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b艾丽卡，绝不能回头！", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#啊啊啊！", 37, 9400580, true, true);
            } else {
              if (status === V++) {
                cm.sendNewEffects(19, [3000]);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=7627875", -1, 500, 20);
                    cm.npc_SetForceMove("oid=7627876", -1, 500, 20);
                    cm.npc_SetForceMove("oid=7627877", -1, 500, 20);
                    cm.npc_SetForceMove("oid=7627878", -1, 500, 20);
                    cm.npc_SetForceMove("oid=7627879", -1, 500, 20);
                    cm.npc_SetForceMove("oid=7627880", -1, 500, 20);
                    cm.npc_SetForceMove("oid=7627881", -1, 500, 20);
                    cm.npc_SetForceMove("oid=7627882", -1, 500, 20);
                    cm.npc_SetForceMove("oid=7627883", -1, 500, 20);
                    cm.inGameDirectionEvent_同时移动镜头和人(1, 600);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                    cm.npc_LeaveField("oid=7627875");
                    cm.npc_LeaveField("oid=7627876");
                    cm.npc_LeaveField("oid=7627877");
                    cm.npc_LeaveField("oid=7627878");
                    cm.npc_LeaveField("oid=7627879");
                    cm.npc_LeaveField("oid=7627880");
                    cm.npc_LeaveField("oid=7627881");
                    cm.npc_LeaveField("oid=7627882");
                    cm.npc_LeaveField("oid=7627883");
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#啊啊，太……太累了！", 37, 9400580, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b再加把劲啊！", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(1);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=7627875", -1, 500, 20);
                              cm.npc_SetForceMove("oid=7627876", -1, 500, 20);
                              cm.npc_SetForceMove("oid=7627877", -1, 500, 20);
                              cm.npc_SetForceMove("oid=7627878", -1, 500, 20);
                              cm.npc_SetForceMove("oid=7627879", -1, 500, 20);
                              cm.npc_SetForceMove("oid=7627880", -1, 500, 20);
                              cm.npc_SetForceMove("oid=7627881", -1, 500, 20);
                              cm.npc_SetForceMove("oid=7627882", -1, 500, 20);
                              cm.npc_SetForceMove("oid=7627883", -1, 500, 20);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 500);
                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#呵，咳……我已经……啊啊。", 37, 9400580, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#b艾丽卡，坚持下，再加把劲！", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_ForcedFlip(1);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip(1);
                                              cm.sendNormalTalk_Bottom("#b艾丽卡，艾丽卡！肯定有像昨天我掉进去的地方那样冰冻得比较薄的地方！", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#b这里肯定也有那种地方！如果诱引到那种地方不就能争取时间了吗？！", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#嗬嗬，嗬哧！", 37, 9400580, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.playerMessage(-1, "寻找冰冻得比较薄的地方，打碎冰面。");
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_QTE(1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_OneTimeAction(13, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  cm.npc_LeaveField("oid=7627883");
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#啊啊，啊啊啊……", 37, 9400580, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#b可恶，不行吗？！", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_QTE(1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_OneTimeAction(13, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#b拜托……了！！", 57, 0, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_QTE(1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_OneTimeAction(13, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.onSetMapObjectMove("snow", [1, 255, 0]);
                                                                                            cm.onSetMapObjectMove("snow", '0', [2, 0]);
                                                                                            cm.sendNewEffects(12, [5000, 620, -340, 0, 0]);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#哈-哈- ", 37, 9400580, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNewEffects(12, [5000, 620, 340, 0, 0]);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/avalanche", 60);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(10000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/avalanche", 128);
                                                                                                        cm.sendNormalTalk_Bottom("#face0#哈，哈……", 37, 9400580, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#b突然……什么……？！", 56, 0, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#b怎么……这是我干的？！", 56, 0, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_复合图片动画(["Map/EffectPL.img/MONAD1/spine/scene2/d1", '0', '', "juliet"], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(7500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402270/Attack7", 128);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_ChangeController(9400690, "oid=7629605", 1600, 260, 21, 1550, 1650, 1, true, false);
                                                                                                                    cm.npc_SetSpecialAction("oid=7629605", 'summon', 0, 0);
                                                                                                                    cm.onSetMapObjectMove("snow", [6, 1]);
                                                                                                                    cm.onSetMapObjectMove("snow", [1, 0, 0]);
                                                                                                                    cm.fieldEffect_取消复合图片动画("juliet", 0, 0);
                                                                                                                    cm.sendNormalTalk_Bottom("#b逃跑吧！！！！！！！！！！", 57, 0, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetForceMove("oid=7629605", -1, 30, 100);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_ChangeController(9400595, "oid=7629620", 1190, 440, 66, 1140, 1240, 1, true, false);
                                                                                                                        cm.npc_SetSpecialAction("oid=7629620", "summon", 0, 0);
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#噢噢噢~~！啪嗒啪嗒！！！！！！！！！！！！！！！！！！", 37, 9400595, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_SetForceMove("oid=7629620", -1, 2000, 300);
                                                                                                                          cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNewEffects(12, [1000, 1100, 340, 0, 0]);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNewEffects(19, [1000]);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_MoveAction(1);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                    } else if (status === V++) {
                                                                                                                                      cm.forceCompleteQuest(64090);
                                                                                                                                      cm.forceStartQuest(64091, '');
                                                                                                                                      cm.npc_LeaveField("oid=7629605");
                                                                                                                                      cm.npc_LeaveField("oid=7627875");
                                                                                                                                      cm.npc_LeaveField("oid=7627876");
                                                                                                                                      cm.npc_LeaveField("oid=7627877");
                                                                                                                                      cm.npc_LeaveField("oid=7627878");
                                                                                                                                      cm.npc_LeaveField("oid=7627879");
                                                                                                                                      cm.npc_LeaveField("oid=7627880");
                                                                                                                                      cm.npc_LeaveField("oid=7627881");
                                                                                                                                      cm.npc_LeaveField("oid=7627882");
                                                                                                                                      cm.npc_LeaveField("oid=7627883");
                                                                                                                                      cm.npc_LeaveField("oid=7629605");
                                                                                                                                      cm.npc_LeaveField("oid=7629620");
                                                                                                                                      cm.npc_LeaveField("oid=7629620");
                                                                                                                                      cm.dispose();
                                                                                                                                      cm.openNpc(0, "副本_莫奈德_Act2_探索森林七");
                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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