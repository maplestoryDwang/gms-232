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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064220");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201534, "oid=2749600", 260, 212, 12, 210, 310, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2749600", "summon", 0, 0);
      cm.npc_ChangeController(9201535, "oid=2749601", -100, 212, 2, -150, -50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2749601", "summon", 0, 0);
      cm.npc_ChangeController(9201536, "oid=2749602", -200, 212, 4, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2749602", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 100, 250);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/12thMiniGame/getMesso3", "oid=2749600"], [0, 0, 80, 1, 0, 1, 0, 0]);
              cm.npc_SetForceMove("oid=2749600", 1, 50, 300);
              cm.inGameDirectionEvent_MoveAction(5);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.inGameDirectionEvent_MoveAction(4);
                cm.emotion(1, 39999);
                cm.inGameDirectionEvent_AskAnswerTime(2200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("绯红之心！动手！", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=2749600", -1);
                    cm.sendNormalTalk_Bottom("#face2#不——！", 37, 9201534, true, true);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=2749601", 1, 150, 300);
                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=2749601", "naricane", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=2749600", "catch2", -1, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#干得漂亮，英雄！", 37, 9201536, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#这是……快放我出去！", 37, 9201534, false, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=2749601", 1, 100, 50);
                                  cm.sendNormalTalk_Bottom("你被愤怒蒙蔽了双眼。\r\n她对你就这么重要吗，纳瑞坎？", 37, 9201535, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("我尝到过为了履行职责而失去某人的痛苦。\r\n我还以为你会以我为戒。", 37, 9201535, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#你……这不是……你害死了母亲！", 37, 9201534, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#我的痛苦都是因为你！\r\n你竟然敢把我……", 37, 9201534, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#很抱歉，儿子。\r\n我们要就此分别了。", 37, 9201535, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#拜托了，好好反省吧。", 37, 9201535, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=2749601", 'spell', -1, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#你要干什么？", 37, 9201534, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#不要！住手！", 37, 9201534, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom('……', 37, 9201535, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#……父亲！", 37, 9201534, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('……', 37, 9201535, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#不！", 37, 9201534, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.setNpcSpecialActionReset("oid=2749601");
                                                                  cm.npc_SetSpecialAction("oid=2749601", "antellion", 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
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
                                                                            cm.setNpcSpecialActionReset("oid=2749600");
                                                                            cm.npc_SetSpecialAction("oid=2749600", "lock2", 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetSpecialAction("oid=2749600", "lock21", -1, 0);
                                                                              cm.setNpcSpecialActionReset("oid=2749600");
                                                                              cm.npc_SetSpecialAction("oid=2749600", "lock22", 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_LeaveField("oid=2749600");
                                                                                cm.npc_LeaveField("oid=2749600");
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=2749601", -1, 280, 80);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=2749601", 0);
                                                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#绯红之心……", 37, 9201536, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom('……', 37, 9201535, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("绯红之心……", 57, 0, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.userSetFieldFloating(610064220, 4, 4, 10);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_setForceFlip("oid=2749601", 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("我们的战斗让守护者的要塞摇摇欲坠。\r\n是时候离开了。", 37, 9201535, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
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
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                              } else if (status === V++) {
                                                                                                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 2);
                                                                                                                cm.updateInfoQuest(61371, "1=1;2=1;3=1");
                                                                                                                cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                                                                                                cm.npc_SetForceMove("oid=2749601", -1, 1000, 200);
                                                                                                                cm.npc_SetForceMove("oid=2749602", -1, 1000, 200);
                                                                                                                cm.userSetFieldFloating(610064220, 4, 4, 10);
                                                                                                                cm.eventSKill(0);
                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
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