var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400929, "oid=22373520", -150, 100, 3, -200, -100, 0, true, false);
      cm.npc_SetSpecialAction("oid=22373520", "summon", 0, 0);
      cm.npc_ChangeController(9400928, "oid=22373521", -100, 100, 3, -150, -50, 0, true, false);
      cm.npc_SetSpecialAction("oid=22373521", 'summon', 0, 0);
      cm.npc_ChangeController(9400951, "oid=22373522", 350, 100, 4, 300, 400, 1, false, false);
      cm.npc_SetSpecialAction("oid=22373522", "summon", 0, 0);
      cm.npc_SetForceMove("oid=22373521", 1, 300, 100);
      cm.npc_SetForceMove("oid=22373520", 1, 300, 100);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
      cm.sendNewEffects(17, [2000, 1000, 2000, 300, 120]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#金利奇真是亲切呢！", 37, 9400921, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#是啊，而且他似乎还很有钱，真是羡慕啊。", 37, 9400920, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#那个，请给我一杯果汁！请放入满满的荔枝和芒果，做得甜甜的！", 37, 9400920, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#在这里，客人~ ", 37, 1082001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#真好喝！哥哥和#h0#也尝尝吧！", 37, 9400920, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#那我就来一杯奶昔吧！", 37, 9400921, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#凯兰西亚虽然也很好，但是这里也不错啊！温暖的阳光，凉爽的风~~还有好喝的果汁，哇！", 37, 9400920, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#那个，再给我一杯吧！", 37, 9400920, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#要不要来一个配着果汁一起吃的手工汉堡呢？", 37, 1082001, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#好的！请给我一份吧！", 37, 9400920, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#真是太好了，看到艾米这么开心，我也很开心。像这样炎热的风，不断涌来的波浪，还有闪耀的沙滩……一切都是那么神奇。我还是第一次离开凯兰西亚，到其他地方旅行，所以有点激动呢。", 37, 9400921, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#……在家里休息虽然也很好，但是偶尔像这样脱离一下日常也不错。不过我们可不是来玩的呢，真是的……", 37, 9400921, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#b来都来了，就休息一下！好好放松吧！", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_ChangeController(9400950, "oid=22373800", 0, 100, 3, -50, 50, 0, false, false);
                                      cm.npc_SetSpecialAction("oid=22373800", "summon", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=22373521", -1);
                                        cm.npc_setForceFlip("oid=22373520", -1);
                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                        cm.sendNormalTalk_Bottom("#face0#很抱歉，我有个坏消息~这个不是我们度假村出售的明信片呢~ ", 37, 1082002, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b谢谢你能告诉我们。那我们就先走了。", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#客人，请别忘记结账哦。这是账单~ ", 37, 1082001, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=22373521", 1);
                                              cm.npc_setForceFlip("oid=22373520", 1);
                                              cm.inGameDirectionEvent_ForcedFlip(1);
                                              cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 128);
                                                cm.inGameDirectionEvent_Monologue("荔枝芒果汁3杯......... 1,500,000 金币", 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 128);
                                                  cm.inGameDirectionEvent_Monologue("奶昔2杯 ......... 500,000 金币", 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 128);
                                                    cm.inGameDirectionEvent_Monologue("橙汁1杯 ......... 500,000 金币", 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 128);
                                                      cm.inGameDirectionEvent_Monologue("蘑菇手工汉堡 ......... 2,000,000 金币", 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 128);
                                                        cm.inGameDirectionEvent_Monologue("主厨推荐料理 ......... 3,500,000 金币", 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 128);
                                                          cm.inGameDirectionEvent_Monologue("炸虾 ......... 1,000,000 金币", 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 128);
                                                            cm.inGameDirectionEvent_Monologue("海鲜披萨......... 2,000,000 金币", 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 128);
                                                              cm.inGameDirectionEvent_Monologue("─────────────────────────", 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 128);
                                                                cm.inGameDirectionEvent_Monologue("       #fs30#共计 ........ 11,000,000 金币", 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 2000, 0, 6711706);
                                                                      cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 2000, 9400929, 6711706);
                                                                      cm.effect_NormalSpeechBalloon('!!!', 1, 0, 0, 2000, 9400928, 6711706);
                                                                      cm.sendNormalTalk_Bottom("#b我们三个吃了这么多？是不是弄错了……", 57, 0, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#……#h0#……我，我以为是免费的……", 37, 9400920, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#我也是……我第一次来这种地方……", 37, 9400921, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#b哈哈，没……没关系……能分期……付款吗？", 57, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#我听了一下，似乎有个小问题呢~请问你们是没有足够的钱来支付吗？请不要担心，在金海滩，工作是不缺的。", 37, 1082002, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#b… ", 57, 0, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#如果准备好了，就来找我吧~ ", 37, 1082002, true, true);
                                                                                } else if (status === V++) {
                                                                                  cm.warp(120040000, 11);
                                                                                  cm.eventSKill(0);
                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                  cm.forceCompleteQuest(64629);
                                                                                  cm.npc_LeaveField("oid=22373520");
                                                                                  cm.npc_LeaveField("oid=22373521");
                                                                                  cm.npc_LeaveField("oid=22373522");
                                                                                  cm.npc_LeaveField("oid=22373800");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;