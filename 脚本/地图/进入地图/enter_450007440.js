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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_Monologue("对于光明超越者使用的力量，大家意见纷纷。", 0);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("但可以肯定的是，这种力量分为#r光明#k和#r黑暗#k两种相反的能力，", 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("觉醒的超越者只能拥有两者之中的#r一种力量#k。", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("根据推测，其原因是……", 1);
          } else {
            if (status === V++) {
              cm.fieldEffect_复合图片动画(["Map/Effect3.img/esfera/spine/tanamemory/skeleton", 'A', '', 'A'], [0, 1, 1, 90000, 0, 0, 0, 1]);
              cm.sendNormalTalk_Bottom("#face0#原因是……", 37, 3003508, false, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_复合图片动画(["Map/Effect3.img/esfera/spine/tanamemory/skeleton", "A-B", '', 'A-B'], [0, 0, 1, 0, 0, 0, 0, 1]);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/memory", 1700);
                cm.inGameDirectionEvent_AskAnswerTime(5000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_复合图片动画(["Map/Effect3.img/esfera/spine/tanamemory/skeleton", 'B', '', 'B'], [0, 1, 1, 90000, 0, 0, 0, 1]);
                  cm.sendNormalTalk_Bottom("#face4#啊！竟然是毁灭掉！", 37, 3003508, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('毁灭？', 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#黑暗的力量。是存在的毁灭。", 37, 3003504, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我受够了。哼，执行者们。\r\n说什么超越者，对我们呼来喝去。", 45, 3003509, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face5#还没全看完。后面的内容……", 37, 3003508, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#只能拥有两种力量之一的原因？不是很简单吗？\r\n为了不用再写出这种无聊的书来。", 45, 3003509, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('#face5#哼！', 37, 3003508, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#你能作为预备者留下来真好，塔纳。不会被无聊的力量所迷惑……\r\n可以过属于自己的生活。", 45, 3003509, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face4#……？", 37, 3003508, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我走了。好好玩，把我的那一份也算上。", 45, 3003509, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_复合图片动画(["Map/Effect3.img/esfera/spine/tanamemory/skeleton", "B-C", '', "B-C"], [0, 0, 1, 0, 0, 0, 0, 1]);
                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_复合图片动画(["Map/Effect3.img/esfera/spine/tanamemory/skeleton", 'C', '', 'C'], [0, 1, 1, 90000, 0, 0, 0, 1]);
                                        cm.sendNormalTalk_Bottom('#face0#……', 37, 3003508, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#你知道为什么在光明和黑暗之中，只能拥有一种力量吗？", 37, 3003508, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_复合图片动画(["Map/Effect3.img/esfera/spine/tanamemory/skeleton", "C-A", '', "C-A"], [0, 0, 1, 0, 0, 0, 0, 1]);
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/memory", 1700);
                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_复合图片动画(["Map/Effect3.img/esfera/spine/tanamemory/skeleton", 'A', '', 'A'], [0, 1, 1, 90000, 0, 0, 0, 1]);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#因为两个预备者会分享力量。", 37, 3003508, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("又造出来了！那就是光之力量？！", 57, 0, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#光之力量。是创造。", 37, 3003504, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_取消复合图片动画('A', 1, 1000);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("光明超越者的能力是创造和毁灭……", 57, 0, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#啊……是不是就是那句话呢？", 37, 3003500, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom('嗯？', 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#军团长威尔的话。\r\n#r在终极黑暗中可以找到终极之光……#k", 37, 3003500, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#你想想看，黑暗不过是手段，他想要的东西是光……\r\n如果说光是创造，黑暗是毁灭……", 37, 3003500, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("！！！", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#灭亡应该不是最终的目的。如果我的推测没错，也许#b黑魔法师#k……", 37, 3003500, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#想要创造#fs18##r新世界#k。", 37, 3003500, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                  } else if (status === V++) {
                                                                                    cm.setStandAloneMode(false);
                                                                                    cm.forceCompleteQuest(34576);
                                                                                    cm.dispose();
                                                                                    cm.warp(450007140, 0);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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