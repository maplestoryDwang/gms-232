var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#对抗者大人，伊黛娜大人，守护者大人。请即刻随我前往王宫。", 36, 3004437, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#有什么事？", 36, 3004431, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0##r敌军将领#k一个人来了。", 36, 3004437, true, true);
        } else if (status === v++) {
          cm.dispose();
          cm.warp(993151007, 0, false);
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.setStandAloneMode(true);
      cm.sendNormalTalk_Bottom("#face0#不过，真的不要紧吗？", 36, 3004431, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#还不能确认他是不是圣剑之主，这你应该很清楚吧？", 36, 3004431, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#说不定事实如伊黛娜大人所说。但是……", 36, 3004430, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#无论如何，他都是与我并肩作战的战友。\r\n我不能明知他成了人质，还置之不理。", 36, 3004430, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#……那也没办法了。", 36, 3004431, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#那我先出发了。", 36, 3004430, true, true);
              } else {
                if (status === v++) {
                  cm.forceCompleteQuest(39910);
                  cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
                  cm.setStringForQuestInfo(39900, '23', 'h0');
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#真的没问题吗。我还是觉得……", 36, 3004436, false, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#肯定是陷阱。", 36, 3004431, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#你为什么没有阻拦呢？", 36, 3004436, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#塞伦肯定也是这么想的。\r\n所以才坚持要一个人去。", 36, 3004431, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#即·便·如·此！我也不会眼睁睁看着她往陷阱里钻的。", 36, 3004431, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#奇勒摩是个怎样的人？", 36, 3004435, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#听说是深受教团器重的骑士。", 36, 3004431, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#原来有情报啊？", 36, 3004436, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#为了寻找方法治愈塞伦内心的创伤。\r\n我翻阅了她写下的护送圣剑作战任务报告书。", 36, 3004431, true, true);
                                  } else {
                                    if (status === v++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === v++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === v++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                          cm.effect_Text(["#fn黑体##fs18#数年以前，近天峰附近。"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face0#团长大人，我们好像被包围了！", 37, 3004437, false, true);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face0#无论如何，都要守住圣剑。", 37, 3004456, true, true);
                                              cm.effect_Voice("Voice5.img/CH3/0_1", 128);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face0#胆敢后退的人一律视为叛教者。", 37, 3004456, true, true);
                                                cm.effect_Voice("Voice5.img/CH3/0_2", 128);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom("#face2#骑士团！突击！！", 37, 3004456, true, true);
                                                  cm.effect_Voice("Voice5.img/CH3/0_3", 128);
                                                } else {
                                                  if (status === v++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.sendNormalTalk_Bottom("#face0#近天峰被翼人军攻陷以后，塞伦所属的骑士团便准备护送圣剑……", 36, 3004431, false, true);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.sendNormalTalk_Bottom("#face0#看来她离开城市不久，就遇到了追剿部队。", 36, 3004431, true, true);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.sendNormalTalk_Bottom("#face0#据说塞伦和少数几个带着圣剑突围，\r\n而其他的人为了帮他们争取时间，全都去断后了。", 36, 3004431, true, true);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.sendNormalTalk_Bottom("#face0#同时，包括#b罗兰德#k在内的小队成员都为了保证圣剑能安全脱离包围，而充当了诱饵。", 36, 3004431, true, true);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.sendNormalTalk_Bottom("#face1#……好惨烈。", 36, 3004435, true, true);
                                                            } else {
                                                              if (status === v++) {
                                                                cm.sendNormalTalk_Bottom("#face0#但是，听说塞伦那边也受到了袭击，\r\n失去同伴的她，最终回到了骑士团原本所在之处。", 36, 3004431, true, true);
                                                              } else {
                                                                if (status === v++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#在那里看到的……", 36, 3004431, true, true);
                                                                } else {
                                                                  if (status === v++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === v++) {
                                                                      cm.fieldEffect_PlayBGM("Bgm53/GraveyardOfSword", 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                    } else {
                                                                      if (status === v++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust2/7", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                      } else {
                                                                        if (status === v++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#应该是战友们陈尸荒野的凄惨景象。", 36, 3004431, false, true);
                                                                        } else {
                                                                          if (status === v++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                          } else {
                                                                            if (status === v++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === v++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#等一等，那么那个叫奇勒摩的……", 36, 3004436, false, true);
                                                                              } else {
                                                                                if (status === v++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#就是他带领部下断后的。", 36, 3004431, true, true);
                                                                                } else {
                                                                                  if (status === v++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#嗯……", 36, 3004435, true, true);
                                                                                  } else {
                                                                                    if (status === v++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                    } else {
                                                                                      if (status === v++) {
                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                      } else if (status === v++) {
                                                                                        cm.eventSKill(0);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.setStandAloneMode(false);
                                                                                        cm.dispose();
                                                                                        cm.fieldEffect_PlayBGM("Bgm53/RedMoon", 0, 0);
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}