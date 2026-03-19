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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063090");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
      cm.inGameDirectionEvent_AskAnswerTime(5200);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18#守护者的要塞 - 纳瑞坎进攻中"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.setAmbience("Ambience.img/warfare2", 100, 60);
        cm.npc_ChangeController(9201548, "oid=2711619", 1800, 275, 79, 1750, 1850, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2711619", "summon", 0, 0);
        cm.npc_ChangeController(9201549, "oid=2711620", 686, 275, 15, 636, 736, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2711620", "summon", 0, 0);
        cm.inGameDirectionEvent_PushMoveInfo(0, 200, 535, 200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(14152);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2200);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=2711620", 1);
              cm.npc_SetForceMove("oid=2711620", 1, 600, 100);
              cm.inGameDirectionEvent_PushMoveInfo(0, 200, 1450, 200);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(4576);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(6200);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=2711620", 0);
                    cm.sendNormalTalk_Bottom('……', 37, 9201549, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.playSoundEffDirectly("Ambience.img/warfare2");
                        cm.setAmbience("Ambience.img/warfare_far", 80, 60);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1450, 280);
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
                                cm.npc_SetForceMove("oid=2711619", -1, 100, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(4200);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("让开。", 37, 9201549, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('办不到。', 37, 9201548, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=2711620", 1, 50, 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("努曼纳尔，你给我让开！", 37, 9201549, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=2711619", -1, 50, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("你是盗贼宗师。\r\n不能临阵脱逃。", 37, 9201548, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("我不是要逃跑！\r\n我……我没有义务参与这场战斗。你也没有！", 37, 9201549, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("我们都曾发誓守护幻日。\r\n所以我们才有资格成为宗师，分享幻日的力量。", 37, 9201548, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("你要背叛这一神圣的职责吗？", 37, 9201548, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("……我还有事要做。\r\n不能死在这种地方。", 37, 9201549, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("其实我，当初并不相信卢坎和那个来自未来的孩子的故事。\r\n我认为你绝不会背叛我们……", 37, 9201548, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("抱歉让你失望了。", 37, 9201549, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("我们已经损失了许多战力。\r\n守护者的要塞的战士们都被腐化，变成了与我们为敌的怪物。", 37, 9201548, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("你不能就这样一走了之，利瑞尼。\r\n为了幻日，与我们并肩作战吧。", 37, 9201548, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("与绯红之心并肩作战。", 37, 9201548, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("你什么时候这么能说了？\r\n我还是比较喜欢你寡言少语的样子。", 37, 9201549, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("利瑞尼……", 37, 9201548, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("我很抱歉，真的很抱歉。", 37, 9201549, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=2711620", 1, 250, 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=2711619", 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("……你忘了绯红之心的命令了吗？\r\n叛徒将受到严惩！", 37, 9201548, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_setForceFlip("oid=2711620", 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("有种就试试。", 37, 9201549, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                            cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201548, null, cm.getPlayer().getId());
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_SetForceMove("oid=2711620", -1, 30, 100);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("继续啊，努曼纳尔。\r\n如果我今天必死无疑，那我宁愿死在你手上。", 37, 9201549, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("我……", 37, 9201548, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom('我就知道你是个孬种。', 37, 9201549, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_setForceFlip("oid=2711620", 1);
                                                                                                            cm.npc_SetForceMove("oid=2711620", 1, 200, 100);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                          } else if (status === V++) {
                                                                                                            cm.npc_LeaveField("oid=2711620");
                                                                                                            cm.playerMessage(5, "你必须消灭所有怪兽才能前往下一区域。");
                                                                                                            cm.eventSKill(0);
                                                                                                            cm.dispose();
                                                                                                            cm.openNpc("克拉齐亚_第三幕_战斗2");
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.npc_LeaveField("oid=2711619");
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}