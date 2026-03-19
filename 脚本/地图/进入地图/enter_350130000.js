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
      cm.npc_ChangeController(1540799, "oid=58697", 1007, 97, 19, 957, 1057, 5, true, 0, false);
      cm.npc_ChangeController(1540875, "oid=58698", 947, 97, 19, 897, 997, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540809, "oid=305371680", 2255, 40, 31, 2205, 2305, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=305371680", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("你正朝着毁灭而去。", 37, 1540819, false, true);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/1", 128);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom('……', 37, 1540809, true, true);
        cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/2", 128);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("相信你也知道，黑魔法师所赐予的力量是需要付出代价的，希拉出卖了国家，而班·雷昂出卖了灵魂。", 37, 1540819, true, true);
          cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/3", 128);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("越是沾染其他力量，你的力量就越壮大，但是长此以往下去，你的身体会支撑不住的。", 37, 1540819, true, true);
            cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/4", 128);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face4#真是可笑，现在谁在担心谁呢？", 37, 1540809, true, true);
              cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/5", 128);
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
                    cm.inGameDirectionEvent_AskAnswerTime(4500);
                    cm.effect_Text(["#fn黑体##fs18#雪龟岛 #fs15##fn黑体#魔族阵营深处"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("你现在可不是该担心别人的处境。", 37, 1540809, false, true);
                      cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/6", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你的计划实在是太鲁莽了，其他军团长知道你的计划吗？", 37, 1540819, true, true);
                        cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/7", 128);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face4#这怎么可能，如果阿卡伊勒那家伙知道了我的计划，绝对不会毫无动静的。", 37, 1540809, true, true);
                          cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/8", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#阿卡伊勒虽然背叛了自己所供奉的时间超越者，但至少并没有打算去吸收她的力量，因为他知道自己能有多大的本事。", 37, 1540819, true, true);
                            cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/9", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face6#……你今天还真是格外的烦人，你到底想说什么？", 37, 1540809, true, true);
                              cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/10", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#现在还为时不晚，收手吧。", 37, 1540819, true, true);
                                cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/11", 128);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_Hero8(1);
                                  cm.fieldEffect_Hero9(0, 1000);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                    cm.fieldEffect_Hero9(100, 500);
                                    cm.npc_SetForceMove("oid=305371680", -1, 3, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("这已经不再是我一个人的问题。", 37, 1540809, false, true);
                                      cm.effect_Voice("Voice3.img/HofM/ACT3/OP1/12", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayBGM("Bgm45/Army Of Fears Theme", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=305371680", -1, 1100, 200);
                                          cm.sendNewEffects(18, [8000, 1000, 800, -2000, 250]);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(9000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_Hero8(1);
                                              cm.fieldEffect_Hero9(60, 1000);
                                              cm.sendNormalTalk_Bottom('报告吧。', 37, 1540809, false, true);
                                              cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/1", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.setNpcSpecialActionReset("oid=305371680");
                                                cm.npc_SetSpecialAction("oid=305371680", 'stand2', -1, 1);
                                                cm.sendNormalTalk_Bottom("前线无变化，依然在对峙。", 37, 1540799, true, true);
                                                cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/2", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("我方的损失呢？", 37, 1540809, true, true);
                                                  cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/3", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("精锐兵力的损失中，大部分都是那些英雄的家伙所为，更令人担忧的是补给，估计支撑不了太久。", 37, 1540799, true, true);
                                                    cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/4", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("别担心，这场战争不会持续太久的。", 37, 1540809, true, true);
                                                      cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/5", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=305371680", -1, 380, 250);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNewEffects(18, [2000, 800, 800, -500, 100]);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.setNpcSpecialActionReset("oid=305371680");
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("我知道你们一直在等待进攻的命令，也很怀疑为何要在这么寒冷的地方筑起前线。", 37, 1540809, false, true);
                                                                cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/6", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("离开绯红的时候，我曾经许诺你们，要摆脱那些纯种魔族的魔掌，创造专属于我们的世界。", 37, 1540809, true, true);
                                                                  cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/7", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetSpecialAction("oid=305371680", "sword", 0, 0);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/dem_sword", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetSpecialAction("oid=305371680", "sword_say", -1, 1);
                                                                      cm.sendNormalTalk_Bottom("#face6#我们虽然生来懦弱，但绝对不会懦弱地死去。\r\n现在我们的时代很快就会来到！", 37, 1540809, false, true);
                                                                      cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/8", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.onSetMapObjectCreateLayerMore('ppl', 2, "02_shout", 1);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face6#这次我会亲自出马，在我回来之前，把武器都准备好！", 37, 1540809, false, true);
                                                                          cm.effect_Voice("Voice3.img/HofM/ACT3/OP2/9", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                                            cm.fieldEffect_Hero9(100, 1000);
                                                                            cm.setNpcSpecialActionReset("oid=305371680");
                                                                            cm.npc_SetSpecialAction("oid=305371680", 'teleport', 0, 0);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/dem_teleport", 100);
                                                                            cm.onSetMapObjectCreateLayerMore("bird1", 2, "001_Fbird1(Teleport)", 0);
                                                                            cm.onSetMapObjectCreateLayerMore("bird2", 2, "003_Fbird2(Teleport)", 0);
                                                                            cm.onSetMapObjectCreateLayerMore("bird3", 2, "005_Bbird1(Teleport)", 0);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/birds_teleport", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_LeaveField("oid=305371680");
                                                                              cm.npc_LeaveField("oid=305371680");
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else if (status === V++) {
                                                                                cm.dispose();
                                                                                cm.warp(350130010, 0, true);
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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