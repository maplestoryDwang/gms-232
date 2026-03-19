var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getNumberFromQuestInfo(34940, "dir") == 1) {
    action1(f, E, e);
  } else if (cm.isQuestFinished(34943) && cm.getNumberFromQuestInfo(34943, 'dir') < 1) {
    cm.sendNormalTalk_Bottom("#face0#（……所有人都离开了。现在这里已经没什么事了。离开这里，找点别的事情做吧。）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
    cm.updateInfoQuest(34943, "dir=1;exp=1");
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -494, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_OneTimeAction(25, 999999);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
        cm.effect_Text(["#fn黑体##fs18#不久之后，荒蛮终点站"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -494, 668);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#……呃，呃呃……这又是什么地方……有种熟悉的感觉……还好……没有失去记忆。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#叽，叽勒……终于起来了吗？我们成功地逃了出来，来到了这个叫荒蛮终点站的地方。", 37, 3001510, 1, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_OneTimeAction(2, 999999);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('#face1#呃……', 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#亚克，你的电波刚一中断，我就感觉到怪物们哗啦啦地冲了过来。", 37, 3001510, 0, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#哎呀，但是水晶还没启动……所以我们决定把一切交给命运，然后就出发了，叽勒……", 37, 3001510, 1, 1);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer('d0', "Effect/Direction17.img/effect/ark/illust/12/0", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                cm.sendNormalTalk_Bottom("#face2#虽，虽然最后成功了……但大家差一点就没命了。", 37, 3001508, 0, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#现在我还记得。离开那里时的最后一个场景……呃呃……", 37, 3001508, 1, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#！？", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#感觉大地好像干涸了……不，应该说是生命力根源本身好像干涸了……", 37, 3001508, 1, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#……不管怎样，多亏了你，我们才能活着来到这里。真的……非常感谢。", 37, 3001508, 1, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face8#（为了夺取力量，再次把那里翻个底朝天……让人有一种幻灭感。为什么会这样……）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('d0', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                    cm.sendNormalTalk_Bottom("#face3#哦，哦，我很喜欢这个地方。\r\n但是不管怎么说，这里都不是我们要寻找的乐园。", 37, 3001509, 0, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#啊，不过这里到处都是零件……真是太棒了，嘿嘿。", 37, 3001510, 1, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#嗯……你们说的乐园，是个什么样的地方呢？", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face4#啊哈，既然你想知道，那就告诉你吧！", 37, 3001509, 1, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我们要找的那个地方……", 37, 3001508, 1, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#嗯……让人担心的事情每天只有五件……", 37, 3001508, 1, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face4#啊，必须每天都可以寻宝，叽勒，叽勒楞……", 37, 3001510, 1, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face2#必须到处都是可以理解我的音乐的听众↗", 37, 3001509, 1, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#必须有暖和的温泉，呱呱呱！", 37, 3001513, 1, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#在蓬松柔软的云里！", 37, 3001512, 1, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face2#闪闪发光的夜空！", 37, 3001511, 0, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face9#哈哈，我也很想去看看。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#嗯……我们打算不久之后就离开这里。亚克，你有什么打算？", 37, 3001508, 0, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face3#我……想起了一件要做的事。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face3#我要在这里多搜集一些情报，然后再离开。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#嗯，嗯……看来我们马上要分手了。现在大家都成了一家人，真是太遗憾了……啊，我不是想抓着你不放！", 37, 3001510, 1, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#不过还有点时间。如果你们需要我……我很乐意帮忙。就当是……给你们送行吧。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayBGM("Bgm47.img/HuntingGround", 0, 0);
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
                                                                                                cm.setStandAloneMode(false);
                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                cm.eventSKill(0);
                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                cm.updateInfoQuest(34940, "dir=2;enter=1;exp=1");
                                                                                                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;18=h1;09=h0");
                                                                                                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;18=h1;09=h0;19=h1");
                                                                                                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;20=h1;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;18=h1;09=h0;19=h1");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;