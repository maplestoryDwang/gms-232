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
  if (cm.isQuestFinished(39712)) {
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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18#稍后，圣地"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -2080, -380);
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
              cm.sendNormalTalk_Bottom("威尔被关押在圣地吗？", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#是的。毕竟哪儿也没有圣地安全。\r\n为了关押他，我们还专门改造了地下仓库。", 37, 1540451, true, true);
                cm.effect_Voice("Voice5.img/CH1/Nineheart/2", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#虽说在女皇陛下所在之地修建囚犯的监狱有点不合适，\r\n但他是重大要犯，实在不敢冒险押送。", 37, 1540451, true, true);
                  cm.effect_Voice("Voice5.img/CH1/Nineheart/3", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#而且，他在接下来的战斗中将是个关键人物。", 37, 1540451, true, true);
                    cm.effect_Voice("Voice5.img/CH1/Nineheart/4", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('接下来的战斗？', 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#你还记得#r梅尔朗#k吧。", 37, 1540451, true, true);
                        cm.effect_Voice("Voice5.img/CH1/Nineheart/5", 128);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#此人在许多方面都存在可疑之处，所以我一直很留心，观察他的一举一动。\r\n不料黑魔法师死后，他就不见了。", 37, 1540451, true, true);
                          cm.effect_Voice("Voice5.img/CH1/Nineheart/6", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#他带着大量关于超越之力的信息，消失得无影无踪。", 37, 1540451, true, true);
                            cm.effect_Voice("Voice5.img/CH1/Nineheart/7", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("但是，他不是待在万神殿吗？", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#你看这个。", 37, 1540451, true, true);
                                cm.effect_Voice("Voice5.img/CH1/Nineheart/8", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("（南哈特转交了#b伊黛娜#k的信。）", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#- 前略\r\n\r\n 那家伙说自己是有名的大魔法师的徒弟，但据我最近所知，很久之前他擅自接触#r禁术#k，事情败露后，被逐出师门。\r\n\r\n 他精通神秘的魔法，种种迹象都表明他很不简单，还望你们多加留意，\r\n#r必要时最好将其抓捕。#k\r\n\r\n -伊黛娜书", 37, 3003674, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("嗯？！但是联盟将他……", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#是的，我们没有逮捕他。\r\n因为除了他之外，我们没有其他渠道可以获得关于超越者的信息。", 37, 1540451, true, true);
                                            cm.effect_Voice("Voice5.img/CH1/Nineheart/9", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#他在魔法方面的知识极为渊博，按格兰蒂斯魔法体系的标准来看，也达到了难以估量的水准。", 37, 1540451, true, true);
                                              cm.effect_Voice("Voice5.img/CH1/Nineheart/10", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('天啊……', 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#我们本来打算等战争一结束就把他抓起来，\r\n但看样子他也早发现了自己被怀疑的事实。", 37, 1540451, true, true);
                                                  cm.effect_Voice("Voice5.img/CH1/Nineheart/11", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#所以他轻松地甩开我方的精锐魔法师，就这么消失了。", 37, 1540451, true, true);
                                                    cm.effect_Voice("Voice5.img/CH1/Nineheart/12", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#从现在开始，我们必须查出#r梅尔朗#k从#r蜘蛛王威尔#k这里获得了什么信息，\r\n以及那些信息可以用来做什么。", 37, 1540451, true, true);
                                                      cm.effect_Voice("Voice5.img/CH1/Nineheart/13", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("可是再怎么说，把威尔关在圣地，是不是太危险了？", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#不会有事的。\r\n随着#r黑魔法师#k的消失，他也失去了所有的力量。", 37, 1540451, true, true);
                                                          cm.effect_Voice("Voice5.img/CH1/Nineheart/14", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#但是为了以防万一，骑士团长们正在轮流看守他。", 37, 1540451, true, true);
                                                            cm.effect_Voice("Voice5.img/CH1/Nineheart/15", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#况且，这段时间#b汉斯#k会亲自审问他……", 37, 1540451, true, true);
                                                              cm.effect_Voice("Voice5.img/CH1/Nineheart/16", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion3", 100);
                                                                cm.userSetFieldFloating(993130000, 10, 10, 6);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.userSetFieldFloating(993130000, 0, 0, 0);
                                                                  cm.fieldEffect_PlayBGM("Bgm18/Injustice", 0, 0);
                                                                  cm.sendNormalTalk_Bottom("#face3#天哪？！怎么会这样…… ", 37, 1540451, false, true);
                                                                  cm.effect_Voice("Voice5.img/CH1/Nineheart/17", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Unknown9(0);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else if (status === V++) {
                                                                          cm.updateInfoQuest(39712, 'dir=1');
                                                                          cm.forceCompleteQuest(39712);
                                                                          cm.gainExp(20 * Math.pow(cm.getLevel(), 3));
                                                                          cm.eventSKill(0);
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.setStandAloneMode(false);
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