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
      cm.npc_ChangeController(3003603, "oid=275654", -2827, 88, 19, -2877, -2777, 1, false, 0, false);
      cm.npc_ChangeController(3003608, "oid=275655", -4419, 88, 2, -4469, -4369, 1, false, 0, false);
      cm.updateInfoQuest(35157, "save=993060011;return=450006130");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -4200, 80);
      cm.updateInfoQuest(35150, "01=h1;02=h1;03=h0");
      cm.npc_ChangeController(3003651, "oid=2199876", -4060, 80, 5, -4110, -4010, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2199876", "summon", 0, 0);
      cm.npc_ChangeController(3003662, "oid=2199877", -3430, 80, 12, -3480, -3380, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2199877", "summon", 0, 0);
      cm.npc_ChangeController(3003663, "oid=2199878", -3350, 80, 14, -3400, -3300, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2199878", "summon", 0, 0);
      cm.npc_ChangeController(3003664, "oid=2199879", -3250, 80, 13, -3300, -3200, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2199879", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -4100, 150);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 3000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#周围变暗了。呃……看不到前面，这可不好办。", 37, 3003651, false, true);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=2199876", 1, 150, 130);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 150);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -3800, 150);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -3350, 120);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.userSetFieldFloating(993060011, 10, 10, 10);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.userSetFieldFloating(993060011, 0, 0, 0);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
                                cm.sendNormalTalk_Bottom("是谁！！", 37, 3003663, false, true);
                              } else {
                                if (status === V++) {
                                  cm.effect_NormalSpeechBalloon("#fn黑体##fs18#谁！！", 0, 0, 0, 4000, 1, 0, 0, 0, 4, 3003663, 0, cm.getPlayer().getId());
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -4000, 150);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2199876"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=2199876", 1, 150, 130);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 180);
                                                  cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -3540, 150);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_Hero9(0, 2000);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                        cm.fieldEffect_Hero9(80, 500);
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.setAmbience("Ambience.img/night", 200, 60);
                                                          cm.sendNormalTalk_Bottom("#face0#呼……南哈特。#b#ho##k，你也在啊。\r\n我正在巡逻，抱歉失礼了。", 37, 3003662, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#不。既然会跑到这里来巡逻……。\r\n恐怕圣地附近也发生了变故。", 37, 3003651, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#呃……最近真是十只手都顾不过来。\r\n到处都是锁链，还有很多黑乎乎的怪物出没……", 37, 3003664, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#（奇丹报告了他这段时间在巡逻圣地过程中目击到的情况。最近的异常现象似乎越来越严重了。）", 37, 3003664, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#看来比我预想的还要严重。……明白了。", 37, 3003651, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#南哈特……#b#ho##k来到了冒险岛世界，说明时候终于到了吗？", 37, 3003662, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#呃……联盟终于要和黑魔法师展开最终决战了吗？", 37, 3003662, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#喂，他们都是大忙人，你要拉着唠叨多久啊？", 37, 3003663, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#啊，不知不觉就说多了。\r\n好的，我们也该走了。", 37, 3003662, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#对了，你们有没有见到沃莉和一个矮个子魔法师，\r\n还有一个隶属于反抗者的大块头男人？", 37, 3003651, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#没有……没看见。", 37, 3003663, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#我也没有。", 37, 3003664, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#巡逻的时候如果遇到的话……请转告他们，说我们在前哨基地等他们。", 37, 3003651, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#好的，没问题。祝你们好运。", 37, 3003663, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#也祝你们好运。", 37, 3003651, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                          cm.npc_LeaveField("oid=2199877");
                                                                                                          cm.npc_LeaveField("oid=2199877");
                                                                                                          cm.npc_LeaveField("oid=2199878");
                                                                                                          cm.npc_LeaveField("oid=2199878");
                                                                                                          cm.npc_LeaveField("oid=2199879");
                                                                                                          cm.npc_LeaveField("oid=2199879");
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -3540, 150);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_SetForceMove("oid=2199876", 1, 850, 150);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, -2980, 150);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 710);
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#走掉了。我们也走吧。", 37, 3003651, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("这是怎么回事？", 57, 0, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_SetForceMove("oid=2199876", -1, 20, 100);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#你应该知道吧？三个世界的次元互相冲突，于是形成了神秘河。\r\n现在三个次元还在逐渐靠近。", 37, 3003651, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("（听南哈特的口气，现在次元崩溃现象好像相当严重。\r\n成群结队的怪物和无数的锁链好像就是受此影响而出现的。）", 57, 0, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#为了应对这些变故，联盟想了很多办法。但是……", 37, 3003651, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#如果无法阻止黑魔法师的话，最终一切都会灭亡。", 37, 3003651, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#所以尽快阻止黑魔法师，\r\n才是从根本上解决问题的办法。", 37, 3003651, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#在#r新的命运#k……被决定之前。", 37, 3003651, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("听上去你好像对一切都很了解的样子。", 57, 0, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#那个……", 37, 3003651, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.forceStartQuest(35604, '');
                                                                                                                                              cm.forceCompleteQuest(35604);
                                                                                                                                              cm.gainExp(171586691);
                                                                                                                                              cm.updateInfoQuest(35604, "enter=1");
                                                                                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                    cm.npc_LeaveField("oid=2199876");
                                                                                                                                                    cm.npc_LeaveField("oid=2199876");
                                                                                                                                                    cm.updateInfoQuest(35150, "01=h1;02=h1;03=h1");
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