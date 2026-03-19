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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062390");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201546, "oid=2683841", 80, 200, 42, 30, 130, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2683841", "summon", 0, 0);
      cm.npc_ChangeController(9201534, "oid=2683842", 451, 200, 46, 401, 501, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2683842", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2683841", "hurt", -1, 1);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3200);
        cm.effect_NormalSpeechBalloon('...?', 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201534, null, cm.getPlayer().getId());
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你又是什么人？", 37, 9201534, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 20);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我是即将给这一切画上休止符的人，纳瑞坎！", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2##h0#……不……他太……", 37, 9201546, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                      cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201534, null, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我不知道你是谁……也不在乎你是谁。", 37, 9201534, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=2683842", 'attack', 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(1, 30);
                            cm.emotion(1, 10000);
                            cm.inGameDirectionEvent_MoveAction(4);
                            cm.inGameDirectionEvent_ForcedFlip(1);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("啊哟！好厉害！", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('挡我者死。', 37, 9201534, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=2683842", "attack2", -1, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_BackgroundCanvas(4, 60, 60, 60, 2000, 0, 0);
                                      cm.fieldEffect_BackgroundCanvas(5, 60, 60, 60, 2000, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(800);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_BackgroundCanvas(2, 60, 60, 60, 2000, 0, 0);
                                        cm.fieldEffect_BackgroundCanvas(3, 60, 60, 60, 2000, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(4200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#不……纳瑞……住手……！", 37, 9201546, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.setNpcSpecialActionReset("oid=2683841");
                                            cm.npc_SetForceMove("oid=2683841", 1, 200, 200);
                                            cm.setNpcSpecialActionReset("oid=2683842");
                                            cm.npc_SetSpecialAction("oid=2683842", "attack", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1800);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=2683841", "dead", -1, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("苏巴尼！不！", 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_BackgroundCanvas(4, 255, 255, 255, 2000, 0, 0);
                                                    cm.fieldEffect_BackgroundCanvas(5, 255, 255, 255, 2000, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_BackgroundCanvas(2, 255, 255, 255, 2000, 0, 0);
                                                      cm.fieldEffect_BackgroundCanvas(3, 255, 255, 255, 2000, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_MoveAction(0);
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 20);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom('……', 37, 9201534, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("苏巴尼！振作点！不要死！", 57, 0, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#我——我很抱歉……请你……照顾好……\r\n父亲和幻……", 37, 9201546, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                            cm.effect_NormalSpeechBalloon('不！！', 1, 0, 0, 4500, 1, 0, -20, 0, 4, 0, null, cm.getPlayer().getId());
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("对不起，兄弟。", 37, 9201534, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#先下手为强。", 37, 9201534, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 350, 200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                        cm.effect_NormalSpeechBalloon("#fn???? ExtraBold##fs30##r……纳瑞坎！#k", 1, 0, 0, 4500, 1, 0, -20, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_ProcessOnOffLayer('0', "Map/EffectGL.img/MBlockbuster/illust7", 0, 1500, 0, 0, 14, 4, 0, -1, 0, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(6200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
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
                                                                                                        cm.sendNormalTalk_Bottom("你为什么要与我为敌？\r\n我的目的是世界和平，仅此而已。", 37, 9201534, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("我再警告你一回，不要插手。", 37, 9201534, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#要是你执迷不悟，你将要面对的事物可比这群怪物要可怕得多。", 37, 9201534, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetSpecialAction("oid=2683842", "攻击2", 0, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(6200);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_ChangeController(9201566, "oid=2685166", 40, 200, 42, -10, 90, 0, true, 0, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=2685166", "summon", 0, 0);
                                                                                                                  cm.npc_ChangeController(9201566, "oid=2685167", -160, 200, 8, -210, -110, 0, true, 0, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=2685167", "summon", 0, 0);
                                                                                                                  cm.npc_ChangeController(9201567, "oid=2685168", 0, 200, 9, -50, 50, 0, true, 0, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=2685168", 'summon', 0, 0);
                                                                                                                  cm.npc_ChangeController(9201567, "oid=2685169", -50, 200, 9, -100, 0, 0, true, 0, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=2685169", "summon", 0, 0);
                                                                                                                  cm.npc_ChangeController(9201567, "oid=2685170", -200, 200, 5, -250, -150, 0, true, 0, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=2685170", "summon", 0, 0);
                                                                                                                  cm.npc_ChangeController(9201566, "oid=2685171", -350, 200, 4, -400, -300, 0, true, 0, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=2685171", "summon", 0, 0);
                                                                                                                  cm.npc_ChangeController(9201567, "oid=2685172", -500, 200, 3, -550, -450, 0, true, 0, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=2685172", "summon", 0, 0);
                                                                                                                  cm.npc_ChangeController(9201566, "oid=2685173", -690, 200, 7, -740, -640, 0, true, 0, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=2685173", "summon", 0, 0);
                                                                                                                  cm.npc_ChangeController(9201567, "oid=2685174", -820, 200, 2, -870, -770, 0, true, 0, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=2685174", "summon", 0, 0);
                                                                                                                  cm.npc_ChangeController(9201566, "oid=2685175", -990, 200, 40, -1040, -940, 0, true, 0, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=2685175", "summon", 0, 0);
                                                                                                                  cm.npc_ChangeController(9201567, "oid=2685176", -1020, 200, 40, -1070, -970, 0, true, 0, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=2685176", "summon", 0, 0);
                                                                                                                  cm.npc_ChangeController(9201567, "oid=2685177", -1200, 200, 11, -1250, -1150, 0, true, 0, false);
                                                                                                                  cm.npc_SetSpecialAction("oid=2685177", "summon", 0, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_setForceFlip("oid=2683842", 1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetForceMove("oid=2683842", 1, 200, 100);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3200);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_LeaveField("oid=2683842");
                                                                                                                        cm.npc_LeaveField("oid=2683842");
                                                                                                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(0, 100, -500, 250);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(7219);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                                                                                          } else if (status === V++) {
                                                                                                                            cm.npc_LeaveField("oid=2683841");
                                                                                                                            cm.npc_LeaveField("oid=2683841");
                                                                                                                            cm.npc_LeaveField("oid=2685166");
                                                                                                                            cm.npc_LeaveField("oid=2685166");
                                                                                                                            cm.npc_LeaveField("oid=2685167");
                                                                                                                            cm.npc_LeaveField("oid=2685167");
                                                                                                                            cm.npc_LeaveField("oid=2685168");
                                                                                                                            cm.npc_LeaveField("oid=2685168");
                                                                                                                            cm.npc_LeaveField("oid=2685169");
                                                                                                                            cm.npc_LeaveField("oid=2685169");
                                                                                                                            cm.npc_LeaveField("oid=2685170");
                                                                                                                            cm.npc_LeaveField("oid=2685170");
                                                                                                                            cm.npc_LeaveField("oid=2685171");
                                                                                                                            cm.npc_LeaveField("oid=2685171");
                                                                                                                            cm.npc_LeaveField("oid=2685172");
                                                                                                                            cm.npc_LeaveField("oid=2685172");
                                                                                                                            cm.npc_LeaveField("oid=2685173");
                                                                                                                            cm.npc_LeaveField("oid=2685173");
                                                                                                                            cm.npc_LeaveField("oid=2685174");
                                                                                                                            cm.npc_LeaveField("oid=2685174");
                                                                                                                            cm.npc_LeaveField("oid=2685175");
                                                                                                                            cm.npc_LeaveField("oid=2685176");
                                                                                                                            cm.npc_LeaveField("oid=2685177");
                                                                                                                            cm.playerMessage(5, "时间结束前击败所有怪物。");
                                                                                                                            cm.dispose();
                                                                                                                            cm.forceJoinEvent("克拉齐亚_第二幕_战斗5");
                                                                                                                            cm.scheduleWarpTask(180, 610062420, 0);
                                                                                                                            cm.eventSKill(0);
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