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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9401118, "oid=7268960", -3000, 3300, 7, -3050, -2950, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=7268960", "summon", 0, 0);
        cm.fieldEffect_Hero9(0, 1000);
        cm.fieldEffect_PlayFieldSound("Sound2/PL_Beautyroid.img/Beautyroid3_UnseenPrison", 100);
        cm.inGameDirectionEvent_AskAnswerTime(6200);
        cm.effect_Text(["#fn黑体##fs18#另外，独自留下的克拉尼亚……"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 500, -3000, 3400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2200);
            cm.setAccountQuestInfo(226, "count=13068;T=20200514234417");
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion5", 100);
              cm.userSetFieldFloating(867142013, 4, 4, 10);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.userSetFieldFloating(867142013, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("哼，方案好像已经启动了呢……\r\n托你的福，我失去了一切……！", 36, 9401087, 0, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("母亲，你在这儿啊。", 36, 9401088, 1, 1);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=7268960", -1);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=7268960", 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("啊，你怎么会在这里……？！\r\n你应该不会发现这里的啊！", 36, 9401087, 0, 1);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=7268960", "scare", -1, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=7268960", "scare", 0, 0);
                              cm.sendNormalTalk_Bottom("母亲，我快要消失了。\r\n是杰斯和#h0#做的。", 36, 9401088, 0, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("太……太好了！\r\n别让我犯恶心，快滚蛋吧！", 36, 9401087, 1, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("就像父母不会抛弃孩子一样……\r\n#b孩子也不会抛弃父母的。#k", 36, 9401088, 1, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("你，你什么意思？！", 36, 9401087, 1, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("和我一起走吧，母亲。我会让你和我一起永存在无限的电路传播中的。", 36, 9401088, 1, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("哈！你这个连形体都没有的家伙要把我带到那里？！", 36, 9401087, 1, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("没错，我不能侍奉母亲的肉身了。", 36, 9401088, 1, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("你快安静地消失吧……", 36, 9401087, 1, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("但是内心……\r\n我有可以侍奉母亲#b精神#k的方法。", 36, 9401088, 1, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("你……你说什么？！", 36, 9401087, 1, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("母亲，你一直在我身上做的那个研究—#b共同客体#k系统。\r\n虽然至今精神在不同形态间来往的功能还不稳定……", 36, 9401088, 1, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#r但把一方的精神吸引进来……应该是可行的吧。#k", 36, 9401088, 1, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("你到底什么意思？\r\n你想做什么，住手！", 36, 9401087, 1, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_Beautyroid/krania", 200);
                                                              cm.fieldEffect_ScreenMsg("Map/EffectPL.img/Beautyroid/Krania");
                                                              cm.fieldEffect_ScreenMsg("Map/EffectPL.img/Beautyroid/Dust");
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.userSetFieldFloating(867142013, 2, 2, 10);
                                                                cm.setNpcSpecialActionReset("oid=7268960");
                                                                cm.npc_SetSpecialAction("oid=7268960", "die", -1, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.userSetFieldFloating(867142013, 0, 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(6200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/girlScream", 100);
                                                                    cm.fieldEffect_ProcessOnOffLayer('0', "Map/EffectPL.img/Beautyroid/38", 0, 100, 0, 0, 15, 4, 0, -1, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("这是……这是什么情况？！这里是哪儿？！\r\n我的脸为什么在那里？！", 36, 9401087, 0, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("母亲，我要消失了。阿特利埃不再存在，我也连接不到电源了。", 36, 9401088, 1, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("但母亲你#b可以永存。#k\r\n和无数拟真机器人曾给我发送的信号一样……虽然没有形体，但依然存在……#b就在此处#k。", 36, 9401088, 1, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("不，不要……放开我……！快放了我！", 36, 9401087, 1, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom('母亲，再见。', 36, 9401088, 1, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("不……不可以！放开我！听不到我的话吗？！有人在吗？！", 36, 9401087, 1, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("救命啊！不要啊啊啊啊啊-！", 36, 9401087, 1, 1);
                                                                                } else if (status === V++) {
                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                  cm.eventSKill(0);
                                                                                  cm.warp(867142014, 0, false);
                                                                                  cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                  cm.setStandAloneMode(false);
                                                                                  cm.forceCompleteQuest(64927);
                                                                                  cm.npc_LeaveField("oid=7268960");
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