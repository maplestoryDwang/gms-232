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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064390");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201535, "oid=2754606", 200, 153, 11, 150, 250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2754606", "summon", 0, 0);
      cm.npc_ChangeController(9201547, "oid=2754607", 530, 153, 6, 480, 580, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2754607", "summon", 0, 0);
      cm.npc_ChangeController(9201548, "oid=2754608", 105, 153, 8, 55, 155, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2754608", 'summon', 0, 0);
      cm.npc_ChangeController(9201536, "oid=2754609", 442, 153, 7, 392, 492, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2754609", "summon", 0, 0);
      cm.npc_ChangeController(9201579, "oid=2754610", 263, 153, 11, 213, 313, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2754610", "summon", 0, 0);
      cm.npc_ChangeController(9201578, "oid=2754611", 30, 153, 4, -20, 80, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2754611", "summon", 0, 0);
      cm.npc_ChangeController(9201578, "oid=2754612", -30, 153, 12, -80, 20, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2754612", "summon", 0, 0);
      cm.npc_ChangeController(9201578, "oid=2754613", -93, 153, 1, -143, -43, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2754613", "summon", 0, 0);
      cm.npc_ChangeController(9201578, "oid=2754614", -145, 153, 1, -195, -95, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2754614", "summon", 0, 0);
      cm.npc_ChangeController(9201559, "oid=2754615", 590, 153, 10, 540, 640, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2754615", 'summon', 0, 0);
      cm.npc_ChangeController(9201560, "oid=2754616", 640, 153, 5, 590, 690, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2754616", "summon", 0, 0);
      cm.npc_ChangeController(9201562, "oid=2754617", 710, 153, 5, 660, 760, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2754617", "summon", 0, 0);
      cm.npc_ChangeController(9201561, "oid=2754618", 770, 153, 13, 720, 820, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2754618", "summon", 0, 0);
      cm.npc_ChangeController(9201563, "oid=2754619", 810, 153, 15, 760, 860, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2754619", "summon", 0, 0);
      cm.npc_ChangeController(9201565, "oid=2754620", 860, 153, 15, 810, 910, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2754620", "summon", 0, 0);
      cm.npc_ChangeController(9201564, "oid=2754621", 910, 153, 14, 860, 960, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2754621", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_setForceFlip("oid=2754606", -1);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.npc_setForceFlip("oid=2754606", 1);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("这村庄还真够小的。\r\n我都不知道有这么个地方……", 37, 9201535, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("好了，你之前说什么，绯红之心？r\n你不想回反转界？", 37, 9201536, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("没错，我要和幻日一起留在这里。\r\n幻日带来了太多的危险和悲剧。", 37, 9201535, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我不想让反转界再次受到它的威胁。", 37, 9201535, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("如果你想留下来，那我也留下来。", 37, 9201536, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("你误会了，卢坎。\r\n把幻日留在这里也不安全", 37, 9201535, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("那……你打算……", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……不，绯红之心，你不能——", 37, 9201536, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("对。\r\n我打算一劳永逸地摧毁幻日。", 37, 9201535, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("但摧毁它的唯一办法……", 37, 9201548, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("就是有人必须……", 37, 9201536, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("没错。", 37, 9201535, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                          cm.effect_NormalSpeechBalloon("不——！", 1, 0, 0, 4500, 1, 0, -20, 0, 4, 0, null, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                            cm.effect_NormalSpeechBalloon("不——！", 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201536, null, cm.getPlayer().getId());
                                            cm.effect_NormalSpeechBalloon('不——！', 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201548, null, cm.getPlayer().getId());
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                              cm.effect_NormalSpeechBalloon("不——！", 1, 0, 0, 2400, 1, 0, 0, 0, 4, 9201547, null, cm.getPlayer().getId());
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#不，绯红之心！\r\n我们不同意！", 37, 9201536, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("绝不同意！\r\n纳瑞坎已经无法再染指幻日。\r\n只要我们齐心协力，一定能……", 37, 9201547, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("我们差点就毁灭了这个时间线，而且，最后仍然付出了惨痛的代价。", 37, 9201535, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("万一有个比纳瑞坎更邪恶的人想要夺取幻日呢？", 37, 9201535, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("你们再想想它对这个世界的居民造成的伤害。", 37, 9201535, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("如果我们没能守护住它，那不仅我们会死……所有人都会死。\r\n我认为，没有必要让无数生命承担此风险。", 37, 9201535, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#但是……", 37, 9201536, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("卢坎……他说得有道理。\r\n这可能是我们了结这一切的唯一机会了。", 37, 9201547, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("纳瑞坎说过还有别人想要幻日……甚至比他更想要。", 37, 9201535, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("他不是单干的……？", 37, 9201548, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("且慢，你真的要这样做吗？\r\n就没有其他办法了？", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("这是拯救你所熟悉的那个未来的唯一办法，小英雄。", 37, 9201535, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#那么……请允许我与你一同做出这一牺牲，绯红之心！", 37, 9201536, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("我不同意。\r\n我还有要托付给你们的事……我没法去做的事。", 37, 9201535, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#绯红之心……", 37, 9201536, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                } else if (status === V++) {
                                                                                  cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                                                  cm.updateInfoQuest(61371, "1=1;2=1;3=1;4=1;5=1");
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