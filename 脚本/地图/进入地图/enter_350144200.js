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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -515, -970);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("Ambience.img/bird", 100, 60);
        cm.npc_ChangeController(1540838, "oid=295067079", -316, -400, 5, -366, -266, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=295067079", "summon", 0, 0);
        cm.npc_ChangeController(1540461, "oid=295067080", -600, -400, 9, -650, -550, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=295067080", "summon", 0, 0);
        cm.npc_ChangeController(1540462, "oid=295067082", -680, -400, 9, -730, -630, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=295067082", "summon", 0, 0);
        cm.npc_ChangeController(1540463, "oid=295067083", -760, -400, 9, -810, -710, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=295067083", 'summon', 0, 0);
        cm.Hidden_background("shine", 1, 0, 0, 0);
        cm.Hidden_background("wall", 1, 0, 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
        cm.forceStartQuest(33934, '');
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_Text(["#fn黑体##fs18#几天后    #fs15##fn黑体#尼哈沙漠，遗迹阿布拉克萨斯"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(4000, 1000, 4000, -515, -360);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(5000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom(" 谋士，应该没有残留的魔族士兵了。", 37, 1540458, false, true);
                  cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/1", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("辛苦了，把俘虏都带走吧。", 37, 1540838, true, true);
                    cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/2", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('是！', 37, 1540458, true, true);
                      cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/3", 128);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=295067080", -1, 800, 150);
                        cm.npc_SetForceMove("oid=295067082", -1, 800, 150);
                        cm.npc_SetForceMove("oid=295067083", -1, 800, 150);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("正如传言所说，真是一片庞大的遗迹啊。", 37, 1540810, false, true);
                          cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/4", 128);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=295067079"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.npc_ChangeController(1540810, "oid=295078037", -1100, -400, 8, -1150, -1050, 0, true, 1000, false);
                            cm.npc_SetSpecialAction("oid=295078037", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=295078037", 1, 620, 150);
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                            } else {
                              if (status === V++) {
                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -480, -330);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("利琳，你怎么会来这里？", 37, 1540838, false, true);
                                    cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/5", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我只不过是听说有神奇的遗迹，就过来看看。", 37, 1540810, true, true);
                                      cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/6", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("原来是这样啊……雪龟岛的状况如何了？", 37, 1540838, true, true);
                                        cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/7", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("差不多都整理好了，多亏了几位英雄，才能够减少损失。", 37, 1540810, true, true);
                                          cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/8", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("万幸你没有受伤啊，利琳。", 37, 1540838, true, true);
                                            cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/9", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("哼，就只会嘴上说说。", 37, 1540810, true, true);
                                              cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/10", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(4000, 2000, 4000, -200, -330);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=295078037", 1, 150, 120);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=295067079", 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.onSetBackEffect('shine', 1, 1, 0, 0);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=295078037"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.playSoundEffDirectly("Ambience.img/bird");
                                                          cm.sendNormalTalk_Bottom("……离开里恩岛的那天，你还记得吗？我在等待那些英雄，哥哥出发去寻找女皇。", 37, 1540810, false, true);
                                                          cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/11", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("是啊……已经过去了这么多的岁月啊。", 37, 1540838, true, true);
                                                            cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/12", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("你难道就不后悔那天的选择吗？", 37, 1540810, true, true);
                                                              cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/13", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("我不后悔，不过，我做错的只有一件事。", 37, 1540838, true, true);
                                                                cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/14", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom('？', 37, 1540810, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("我原以为那些英雄不过是旧时代的遗物，\r\n所以，我没能理解那些等待他们的人的心情。", 37, 1540838, false, true);
                                                                      cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/15", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -200, -360);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.Hidden_background("shine", 1, 0, 0, 0);
                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayBGM("Bgm45/Travelers", 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("不过世界仍然需要英雄。\r\n即便时代扭转，岁月流逝，这依然是不变的事实。", 37, 1540838, false, true);
                                                                              cm.effect_Voice("Voice3.img/HofM/ACT4/ED1/16", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(8000, 750, 8000, 1024, -900);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(11000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushScaleInfo(5500, 1000, 5500, 1024, -820);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.onSetBackEffect("wall", 1, 1, 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                        } else if (status === V++) {
                                                                                          cm.dispose();
                                                                                          cm.warp(350144300, 0, true);
                                                                                          cm.npc_LeaveField("oid=295067079");
                                                                                          cm.npc_LeaveField("oid=295067079");
                                                                                          cm.npc_LeaveField("oid=295067080");
                                                                                          cm.npc_LeaveField("oid=295067080");
                                                                                          cm.npc_LeaveField("oid=295067082");
                                                                                          cm.npc_LeaveField("oid=295067082");
                                                                                          cm.npc_LeaveField("oid=295067083");
                                                                                          cm.npc_LeaveField("oid=295067083");
                                                                                          cm.npc_LeaveField("oid=295078037");
                                                                                          cm.npc_LeaveField("oid=295078037");
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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