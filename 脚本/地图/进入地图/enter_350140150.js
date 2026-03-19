var status = -1;
var selectionLog = [];
function action(N, s, o) {
  if (status == 0 && N == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = o;
  var a = -1;
  if (status <= a++) {
    cm.dispose();
  } else {
    if (status === a++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_PlayBGM("Bgm18.img/Injustice", 0, 0);
      cm.npc_ChangeController(1540451, "oid=293489553", -2400, 0, 13, -2450, -2350, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=293489553", "summon", 0, 0);
      cm.npc_ChangeController(1540459, "oid=293489554", -3360, 0, 6, -3410, -3310, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293489554", "summon", 0, 0);
      cm.npc_ChangeController(1540464, "oid=293489555", -3280, 0, 7, -3330, -3230, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293489555", "summon", 0, 0);
      cm.npc_ChangeController(1540465, "oid=293489556", -3200, 0, 8, -3250, -3150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293489556", "summon", 0, 0);
      cm.npc_ChangeController(1540466, "oid=293489557", -3120, 0, 3, -3170, -3070, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293489557", "summon", 0, 0);
      cm.npc_ChangeController(1540676, "oid=293489558", -3040, 0, 9, -3090, -2990, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293489558", "summon", 0, 0);
      cm.npc_ChangeController(1540458, "oid=293489559", -2960, 0, 4, -3010, -2910, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293489559", "summon", 0, 0);
      cm.npc_ChangeController(1540461, "oid=293489560", -2880, 0, 4, -2930, -2830, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293489560", "summon", 0, 0);
      cm.npc_ChangeController(1540462, "oid=293489561", -2800, 0, 2, -2850, -2750, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293489561", "summon", 0, 0);
      cm.npc_ChangeController(1540463, "oid=293489562", -2720, 0, 14, -2770, -2670, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293489562", "summon", 0, 0);
      cm.npc_ChangeController(1540675, "oid=293489563", -2640, 0, 1, -2690, -2590, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293489563", "summon", 0, 0);
      cm.npc_ChangeController(1540674, "oid=293489564", -4500, -410, 63, -4550, -4450, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=293489564", 'summon', 0, 0);
      cm.npc_ChangeController(1540674, "oid=293489565", -3500, -593, 67, -3550, -3450, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=293489565", "summon", 0, 0);
      cm.sendNewEffects(12, [0, -4200, -700, 0, 0]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === a++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === a++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === a++) {
            cm.inGameDirectionEvent_AskAnswerTime(2500);
            cm.effect_Text(["#fn黑体##fs18#同一时间 #fs15##fn黑体#  圣地"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
          } else {
            if (status === a++) {
              cm.sendNewEffects(12, [4000, -2500, 50, 0, 0]);
            } else {
              if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === a++) {
                  cm.sendNormalTalk_Bottom("大家都听好了！我们的目标是将冒险岛世界居民的伤害减少到最少。", 37, 1540838, false, true);
                } else {
                  if (status === a++) {
                    cm.sendNormalTalk_Bottom("我们不知道魔族什么时候会发起攻击，只要联盟还在守着，就不允许敌人进犯一步。", 37, 1540838, true, true);
                  } else {
                    if (status === a++) {
                      cm.sendNormalTalk_Bottom('是！', 37, 1540458, true, true);
                    } else {
                      if (status === a++) {
                        cm.npc_SetForceMove("oid=293489554", -1, 1000, 150);
                        cm.npc_SetForceMove("oid=293489555", -1, 1000, 150);
                        cm.npc_SetForceMove("oid=293489556", -1, 1000, 150);
                        cm.npc_SetForceMove("oid=293489557", -1, 1000, 150);
                        cm.npc_SetForceMove("oid=293489558", -1, 1000, 150);
                        cm.npc_SetForceMove("oid=293489559", -1, 1000, 150);
                        cm.npc_SetForceMove("oid=293489560", -1, 1000, 150);
                        cm.npc_SetForceMove("oid=293489561", -1, 1000, 150);
                        cm.npc_SetForceMove("oid=293489562", -1, 1000, 150);
                        cm.npc_SetForceMove("oid=293489563", -1, 1000, 150);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === a++) {
                          cm.sendNormalTalk_Bottom("南哈特，你在这里啊！", 37, 1540452, false, true);
                        } else {
                          if (status === a++) {
                            cm.npc_ChangeController(1540452, "oid=293500154", -3400, 0, 6, -3450, -3350, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=293500154", 'summon', 0, 0);
                            cm.npc_SetForceMove("oid=293500154", 1, 850, 200);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                            cm.npc_LeaveField("oid=293489554");
                            cm.npc_LeaveField("oid=293489555");
                            cm.npc_LeaveField("oid=293489556");
                          } else {
                            if (status === a++) {
                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                              cm.sendNewEffects(17, [0, 1000, 2000, -2450, 80]);
                            } else {
                              if (status === a++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === a++) {
                                  cm.sendNormalTalk_Bottom("吉格蒙特，多亏了反抗者的帮忙，所有地区的防卫工作才能顺利许多。", 37, 1540838, false, true);
                                  cm.npc_LeaveField("oid=293489557");
                                  cm.npc_LeaveField("oid=293489558");
                                } else {
                                  if (status === a++) {
                                    cm.sendNormalTalk_Bottom("等一下，重要的可不是这件事嘛！你没听到赫丽娜的口信吗？听说那些树木正在急速枯萎。", 37, 1540452, true, true);
                                    cm.npc_LeaveField("oid=293489559");
                                    cm.npc_LeaveField("oid=293489560");
                                  } else {
                                    if (status === a++) {
                                      cm.sendNormalTalk_Bottom("那些树木……？", 37, 1540838, true, true);
                                      cm.npc_LeaveField("oid=293489561");
                                    } else {
                                      if (status === a++) {
                                        cm.sendNormalTalk_Bottom("不仅是金银岛，整个冒险岛世界的生命力都在急速地被向某处吸引……", 37, 1540452, true, true);
                                      } else {
                                        if (status === a++) {
                                          cm.npc_ChangeController(1540700, "oid=293506063", -3200, 0, 8, -3250, -3150, 0, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=293506063", "summon", 0, 0);
                                          cm.npc_ChangeController(1540701, "oid=293506064", -3100, 0, 3, -3150, -3050, 0, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=293506064", "summon", 0, 0);
                                          cm.npc_ChangeController(1540702, "oid=293506065", -3000, 0, 9, -3050, -2950, 0, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=293506065", "summon", 0, 0);
                                          cm.sendNewEffects(17, [2500, 2000, 1000, -2500, 50]);
                                        } else {
                                          if (status === a++) {
                                            cm.npc_SetForceMove("oid=293506063", 1, 400, 300);
                                            cm.npc_SetForceMove("oid=293506064", 1, 400, 300);
                                            cm.npc_SetForceMove("oid=293506065", 1, 400, 300);
                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                          } else {
                                            if (status === a++) {
                                              cm.sendNormalTalk_Bottom("谋士，魔族开始发动总攻击了！", 37, 1540700, false, true);
                                            } else {
                                              if (status === a++) {
                                                cm.sendNormalTalk_Bottom("！该来的还是来了。", 37, 1540452, true, true);
                                              } else {
                                                if (status === a++) {
                                                  cm.sendNormalTalk_Bottom("不要动摇，靠我们联盟军的兵力，绝对可以抵挡住魔族士兵。", 37, 1540838, true, true);
                                                } else {
                                                  if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#……！！那……看那边，谋士！", 37, 1540702, true, true);
                                                  } else {
                                                    if (status === a++) {
                                                      cm.npc_setForceFlip("oid=293489553", 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === a++) {
                                                        cm.fieldEffect_PlayBGM("Bgm45/The Devil Is Coming", 0, 0);
                                                        cm.fieldEffect_BackgroundCanvas(4, 125, 125, 125, 2000, 0, 0);
                                                        cm.fieldEffect_BackgroundCanvas(5, 125, 125, 125, 2000, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(800);
                                                      } else {
                                                        if (status === a++) {
                                                          cm.fieldEffect_BackgroundCanvas(2, 125, 125, 125, 2000, 0, 0);
                                                          cm.fieldEffect_BackgroundCanvas(3, 125, 125, 125, 2000, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                        } else {
                                                          if (status === a++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=293506063"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=293506064"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=293506065"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=293500154"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=293489553"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === a++) {
                                                              cm.sendNormalTalk_Bottom("那是……！", 37, 1540838, false, true);
                                                            } else {
                                                              if (status === a++) {
                                                                cm.sendNewEffects(12, [4000, 2000, -600, 0, 0]);
                                                              } else {
                                                                if (status === a++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else {
                                                                  if (status === a++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else if (status === a++) {
                                                                    cm.dispose();
                                                                    cm.warp(350140160, 0, true);
                                                                    cm.npc_LeaveField("oid=293489553");
                                                                    cm.npc_LeaveField("oid=293489553");
                                                                    cm.npc_LeaveField("oid=293489554");
                                                                    cm.npc_LeaveField("oid=293489555");
                                                                    cm.npc_LeaveField("oid=293489556");
                                                                    cm.npc_LeaveField("oid=293489557");
                                                                    cm.npc_LeaveField("oid=293489558");
                                                                    cm.npc_LeaveField("oid=293489559");
                                                                    cm.npc_LeaveField("oid=293489560");
                                                                    cm.npc_LeaveField("oid=293489561");
                                                                    cm.npc_LeaveField("oid=293489562");
                                                                    cm.npc_LeaveField("oid=293489562");
                                                                    cm.npc_LeaveField("oid=293489563");
                                                                    cm.npc_LeaveField("oid=293489563");
                                                                    cm.npc_LeaveField("oid=293489564");
                                                                    cm.npc_LeaveField("oid=293489565");
                                                                    cm.npc_LeaveField("oid=293489565");
                                                                    cm.npc_LeaveField("oid=293500154");
                                                                    cm.npc_LeaveField("oid=293500154");
                                                                    cm.npc_LeaveField("oid=293506063");
                                                                    cm.npc_LeaveField("oid=293506063");
                                                                    cm.npc_LeaveField("oid=293506064");
                                                                    cm.npc_LeaveField("oid=293506064");
                                                                    cm.npc_LeaveField("oid=293506065");
                                                                    cm.npc_LeaveField("oid=293506065");
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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