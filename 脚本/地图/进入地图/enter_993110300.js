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
      cm.updateInfoQuest(100246, "lv=1;today=0");
      cm.updateInfoQuest(100246, "lv=1;date=20200627;today=0");
      cm.updateInfoQuest(100256, "today=0");
      cm.updateInfoQuest(100256, "date=20200627;today=0");
      cm.updateInfoQuest(100257, "today=0");
      cm.updateInfoQuest(100257, "date=20200627;today=0");
      cm.updateInfoQuest(100258, "today=0");
      cm.updateInfoQuest(100258, "date=20200627;today=0");
      cm.updateInfoQuest(100259, "today=0");
      cm.updateInfoQuest(100259, "date=20200627;today=0");
      cm.updateInfoQuest(100260, "today=0");
      cm.updateInfoQuest(100260, "date=20200627;today=0");
      cm.updateInfoQuest(100261, "today=0");
      cm.updateInfoQuest(100261, "date=20200627;today=0");
      cm.updateInfoQuest(100262, "today=0");
      cm.updateInfoQuest(100262, "date=20200627;today=0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9062172, "oid=15318555", 1050, -100, 17, 1000, 1100, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=15318555", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(6000);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18##fn黑体#新复古王国", ''], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("\r\n你来了，#b#h0##k。", 37, 9062172, false, true, 3);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("\r\n非常感谢。\r\n很抱歉没来得及按王国的礼节好好接待你，就直接谈正事，请你谅解。", 37, 9062172, true, true, 3);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("\r\n在我们美丽安定的#b新复古王国#k里，有一位深受百姓们爱戴的#b公主#k。", 37, 9062172, true, true, 3);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("\r\n即#b奥罗拉公主#k。", 37, 9062172, true, true, 3);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("\r\n她的心地一向温和周到，毋庸置疑是引领我们王国走向未来的最佳人选。", 37, 9062172, true, true, 3);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("\r\n可是，不久前发生了一件非常可怕的事情。", 37, 9062172, true, true, 3);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("\r\n邪恶的#r魔王皮洛克#k绑架公主，搭着他的飞艇飞走了。", 37, 9062172, true, true, 3);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(250);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/16thEvent/piclog", 0, 3000, 0, 0, 25, 4, 3, -1, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(250);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("\r\n在#r魔王皮洛克#k压倒性的强大力量面前，我们王室的近卫队根本束手无策。", 37, 9062172, false, true, 3);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("\r\n说来惭愧，但我们现在没有时间沮丧。", 37, 9062172, false, true, 3);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("\r\n没有公主，就没有我们新复古王国的未来。", 37, 9062172, true, true, 3);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("\r\n意思就是，无论如何都要打败#r魔王皮洛克#k，救出#b奥罗拉公主#k。", 37, 9062172, true, true, 3);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("\r\n方法只有一个。", 37, 9062172, false, true, 3);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("\r\n即解开新复古王国传说中的#b四件装备#k的封印，重拾真正的力量。", 37, 9062172, true, true, 3);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("\r\n据传说，只有#b被选中的勇士#k才能解除新复古装备的封印，等到时机成熟，那些武器和防具就会恢复#b本来的面貌#k，发挥出#r真正的力量#k。", 37, 9062172, true, true, 3);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/16thEvent/item/4", 0, 3000, 0, 0, 25, 4, 1, -1, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("\r\n至今为止，曾有无数勇士发起挑战，但别说获得真正的力量了，就连这第一件装备，#r新复古斗篷#k的封印都没能解开。", 37, 9062172, false, true, 3);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("\r\n不过，我对你抱有很高的期待，#b#h0##k。", 37, 9062172, true, true, 3);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("\r\n我相信你和其他人不一样。", 37, 9062172, true, true, 3);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("\r\n为了解除封印，首先需要足够的#b新复古能量#k。", 37, 9062172, true, true, 3);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("\r\n#b新复古能量#k是笼罩我们王国的能量源。", 37, 9062172, true, true, 3);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("\r\n形势紧急，为尽快解除这#r新复古斗篷#k的封印，我把我拥有的#b新复古能量#k借你用。", 37, 9062172, true, true, 3);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("\r\n（伯爵斯坦把手放在我肩膀上，接着我就感觉到有股未知的力量流入体内）", 56, 0, true, true, 3);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("\r\n好！趁现在！#b#h0##k！\r\n不要迟疑，伸手触碰#r新复古斗篷#k！", 37, 9062172, true, true, 3);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("\r\n（一伸手触摸斗篷，顿时感觉指尖传来一股强烈的热气）", 56, 0, true, true, 3);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect3.img/16thEvent/item/0", 0, 3000, 0, 0, 25, 4, 1, -1, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("\r\n!!!", 37, 9062172, false, true, 3);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("\r\n真不简单！你竟解除了#r新复古斗篷#k的封印！", 37, 9062172, true, true, 3);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("\r\n看来，你果真可能是能拯救我们王国于危难的传说中的#b新复古英雄#k。#b#h0##k。", 37, 9062172, true, true, 3);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("\r\n虽然很想马上解除#r新复古盔甲#k的封印，但我刚才已经把我拥有的#b新复古能量#k全部借给你了。", 37, 9062172, true, true, 3);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                cm.sendNormalTalk_Bottom("\r\n关于收集#b新复古能量#k的各种方法，你可以跟我们王国的百姓们打听，赶快出发吧！", 37, 9062172, true, true, 3);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("\r\n#b奥罗拉公主#k和我们王国的命运全寄托在你身上了，切记！", 37, 9062172, true, true, 3);
                                                                                                } else if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                  cm.warp(993110000, 32, false);
                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                  cm.npc_LeaveField("oid=15318555");
                                                                                                  cm.dispose();
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;