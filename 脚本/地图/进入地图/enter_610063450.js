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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063450");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201539, "oid=2725319", -1830, 837, 1, -1880, -1780, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2725319", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
        cm.inGameDirectionEvent_AskAnswerTime(4200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这是……", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face4#这是幻日的稳定形态。", 37, 9201539, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face4#当它还在反转界的时候，就是这样的。", 37, 9201539, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4#稳定的幻日让反转界的居民能够随意建造类似我那个的传送门，前往任意时空。", 37, 9201539, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(9201571, "oid=2725495", -1130, 772, 3, -1180, -1080, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2725495", "summon", 0, 0);
                    cm.npc_ChangeController(9201572, "oid=2725496", -1050, 772, 3, -1100, -1000, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2725496", "summon", 0, 0);
                    cm.sendNormalTalk_Bottom("幻日这般强大的力量怎么能用来分享，绯红之心。\r\nY你真是个傻瓜。", 37, 9201571, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("一旦我们得到了它，这个世界就是我们的了！", 37, 9201572, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=2725495", 1, 100, 100);
                        cm.npc_SetForceMove("oid=2725496", 1, 100, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(9201535, "oid=2725611", -1304, 772, 3, -1354, -1254, 0, true, 0, false);
                          cm.npc_SetSpecialAction("oid=2725611", "summon", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=2725611", 1, 100, 200);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=2725495", -1);
                              cm.npc_setForceFlip("oid=2725496", -1);
                              cm.npc_SetSpecialAction("oid=2725611", 'attack', 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('啊啊！他……太强了！', 37, 9201571, false, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=2725495", "die", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=2725495");
                                    cm.npc_LeaveField("oid=2725495");
                                    cm.npc_SetSpecialAction("oid=2725496", "die", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=2725496");
                                      cm.npc_LeaveField("oid=2725496");
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=2725611", 1, 100, 100);
                                        cm.npc_ChangeController(9201568, "oid=2725724", -632, 772, 3, -682, -582, 1, true, 0, false);
                                        cm.npc_SetSpecialAction("oid=2725724", "summon", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -950, 800);
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
                                                  cm.npc_SetForceMove("oid=2725724", -1, 200, 100);
                                                  cm.sendNormalTalk_Bottom("#face2#日子一天天过去，想要将幻日据为己有的野心家越来越多。", 37, 9201535, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#我开始怀疑……我真的能够靠自己阻止他们所有人吗？", 37, 9201535, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom('幻日既非善也非恶。', 37, 9201568, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("我们无法阻止别人变强，但，克里斯托弗，你可以变得比任何人都强。", 37, 9201568, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("你无边的潜力正是你被任命为幻日守护者的原因。", 37, 9201568, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("那是谁？", 57, 0, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face4#格罗娜，她曾是绯红之心的妻子。", 37, 9201539, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("……曾是？", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("明天我们就要出发前往另一个世界，一个邪恶势力若隐若现的世界。", 37, 9201535, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("我希望我们能够击退它。", 37, 9201535, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("但要是有人趁我不在来抢夺幻日怎么办？", 37, 9201535, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("你养大的孩子们会保护它的，他们强壮而睿智，一定没问题的。", 37, 9201568, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=2725611", -1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("他们还太年轻。\r\n这可不是儿戏，格罗娜。", 37, 9201535, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_setForceFlip("oid=2725611", 1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#我既担心幻日的安全……也担心你的。", 37, 9201535, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face1#我已经记不清为履行职责而把你置于险情的次数了。", 37, 9201535, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("只要我有一口气在，你就不必操心这点。", 37, 9201568, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_SetForceMove("oid=2725724", -1, 50, 50);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("克里斯托弗，我相信你，你做的事是正确的。", 37, 9201568, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("你要用幻日之力帮助那些需要帮助的人，没有问题，去帮他们吧。", 37, 9201568, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("去帮他们吧。", 37, 9201568, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("接受幻日之力就意味着接受帮助有困难的人的责任。", 37, 9201568, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("你不能让自身的恐惧和疑惑影响你的判断。", 37, 9201568, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("然而，这里有着想要将幻日据为己有的人，想要用幻日统治世界的人。", 37, 9201535, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("那就教导他们。\r\n告诉他们自己错在哪里。\r\n他们对你来说就如同迷途的小孩。", 37, 9201568, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("我们怎么能将他们置之不顾呢？\r\n如果它们做错了，那我们就教他们该怎么做。", 37, 9201568, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("你包容一切的胸怀确实很高尚，但我并不能完全理解。", 37, 9201535, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("加上苏巴尼你就有两个了……会不会太多了？", 37, 9201535, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("我们的爱的无穷无尽的，克里斯托弗。", 37, 9201568, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_SetForceMove("oid=2725724", 1, 250, 80);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetForceMove("oid=2725611", 1, 350, 80);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_LeaveField("oid=2725724");
                                                                                                                                  cm.npc_LeaveField("oid=2725724");
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_LeaveField("oid=2725611");
                                                                                                                                    cm.npc_LeaveField("oid=2725611");
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("哇，格罗娜这样的人真是少有啊。", 57, 0, false, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face4#她是个如同圣母一般的人。\r\n绯红之心知道她的脾性，无条件地爱着她。", 37, 9201539, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#在知道了她的事后我也对家人有了一定的了解。", 37, 9201539, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.forceCompleteQuest(61357);
                                                                                                                                                  cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                                                                  cm.updateInfoQuest(61370, "1=1;2=1;3=1;4=1;5=1");
                                                                                                                                                  cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                                } else if (status === V++) {
                                                                                                                                                  cm.eventSKill(0);
                                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
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