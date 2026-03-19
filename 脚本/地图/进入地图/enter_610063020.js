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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063020");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201536, "oid=2709925", -1780, 167, 56, -1830, -1730, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2709925", "summon", 0, 0);
      cm.npc_ChangeController(9201547, "oid=2709926", -1810, 167, 56, -1860, -1760, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2709926", "summon", 0, 0);
      cm.npc_ChangeController(9201548, "oid=2709927", -1700, 167, 19, -1750, -1650, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2709927", "summon", 0, 0);
      cm.npc_ChangeController(9201549, "oid=2709928", -1620, 167, 66, -1670, -1570, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2709928", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, -1480, -580);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
          cm.inGameDirectionEvent_AskAnswerTime(4200);
          cm.effect_Text(["#fn黑体##fs20#第3幕. 来自反转界的男人"], [100, 3000, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 100, -1480, 250);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2200);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=2709925", 1, 1600, 210);
                cm.npc_SetForceMove("oid=2709926", 1, 1800, 190);
                cm.npc_SetForceMove("oid=2709927", 1, 1800, 200);
                cm.npc_SetForceMove("oid=2709928", 1, 1900, 180);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 1500);
                  cm.inGameDirectionEvent_AskAnswerTime(4200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你们听我说，纳瑞坎已经杀害了苏巴尼，正在前往守护者的要塞！", 37, 9201536, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("他肯定是想要夺走幻日！", 37, 9201536, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("他知道我们会出来找苏巴尼。", 37, 9201536, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("这是声东击西！只有努曼纳尔和利瑞尼两人是阻止不了他的！", 37, 9201536, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("苏巴尼…… *呜咽*", 37, 9201547, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("够了，戴尔格兰德。已经没有时间让你哀悼了。", 37, 9201536, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("我们必须马上去阻止纳瑞坎！", 37, 9201536, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(9201566, "oid=2710147", -800, 167, 27, -850, -750, 0, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=2710147", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_ChangeController(9201566, "oid=2710148", -790, 167, 27, -840, -740, 0, true, 0, false);
                                      cm.npc_SetSpecialAction("oid=2710148", "summon", 0, 0);
                                      cm.npc_ChangeController(9201566, "oid=2710149", -750, 167, 28, -800, -700, 0, true, 0, false);
                                      cm.npc_SetSpecialAction("oid=2710149", 'summon', 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_ChangeController(9201567, "oid=2710151", -700, 167, 28, -750, -650, 0, true, 0, false);
                                        cm.npc_SetSpecialAction("oid=2710151", "summon", 0, 0);
                                        cm.npc_ChangeController(9201567, "oid=2710152", -690, 167, 28, -740, -640, 0, true, 0, false);
                                        cm.npc_SetSpecialAction("oid=2710152", "summon", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_ChangeController(9201567, "oid=2710153", -670, 167, 25, -720, -620, 0, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=2710153", "summon", 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_ChangeController(9201567, "oid=2710154", -650, 167, 25, -700, -600, 0, true, 0, false);
                                            cm.npc_SetSpecialAction("oid=2710154", 'summon', 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=2710147", 1, 400, 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=2710148", 1, 300, 100);
                                                cm.npc_SetForceMove("oid=2710149", 1, 210, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=2710151", 1, 180, 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=2710152", 1, 100, 100);
                                                    cm.npc_SetForceMove("oid=2710153", 1, 80, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=2710154", 1, 40, 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=2709925", -1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=2709926", -1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=2709927", -1);
                                                              cm.npc_setForceFlip("oid=2709928", -1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("等等，他们不是……？\r\n他们不是克拉奇安的居民吗？", 37, 9201536, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=2709925", -1, 90, 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=2709925", 0);
                                                                    cm.sendNormalTalk_Bottom("你们……没事吧？\r\n为什么一副准备战斗的样子……", 37, 9201536, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetSpecialAction("oid=2710147", '进攻', 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=2709925", "hurt", -1, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face2#啊啊！", 37, 9201536, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom('卢坎！', 57, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.setNpcSpecialActionReset("oid=2709925");
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face2#我早该料到会这样！\r\n但还是有点不太对头。", 37, 9201536, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#克拉奇安帝国的老百姓都很善良。\r\n他们绝不会……", 37, 9201536, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("我感知到了邪恶的气息……他们已经不再是你所熟悉的那些克拉奇安人了！", 37, 9201547, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("这也是纳瑞坎干的好事？", 37, 9201548, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("他们数量太多了。我们会来不及回去的！", 37, 9201536, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("我来掩护你们！你们先走！", 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom('战士，你确定吗？', 37, 9201536, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("你就让我出一份力吧。\r\n我帮不了苏巴尼，但至少能帮你们！！", 57, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("请你不要再自责了。", 37, 9201536, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("好啦，好啦，我知道啦，快走！", 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("啊……请你务必要小心。\r\n要是连你也……那我……", 37, 9201547, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("够了，戴尔格兰德！快走！回头见，战士。", 37, 9201536, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_setForceFlip("oid=2709925", 1);
                                                                                                          cm.npc_setForceFlip("oid=2709926", 1);
                                                                                                          cm.npc_setForceFlip("oid=2709927", 1);
                                                                                                          cm.npc_setForceFlip("oid=2709928", 1);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_SetForceMove("oid=2709925", 1, 600, 250);
                                                                                                            cm.npc_SetForceMove("oid=2709926", 1, 400, 200);
                                                                                                            cm.npc_SetForceMove("oid=2709927", 1, 300, 230);
                                                                                                            cm.npc_SetForceMove("oid=2709928", 1, 200, 200);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_LeaveField("oid=2709928");
                                                                                                              cm.npc_LeaveField("oid=2709928");
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_LeaveField("oid=2709927");
                                                                                                                cm.npc_LeaveField("oid=2709927");
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_LeaveField("oid=2709926");
                                                                                                                  cm.npc_LeaveField("oid=2709926");
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_LeaveField("oid=2709925");
                                                                                                                    cm.npc_LeaveField("oid=2709925");
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
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
                                                                                                                              cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                                              cm.updateInfoQuest(61370, "1=1");
                                                                                                                              cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
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
            }
          }
        }
      }
    }
  }
}