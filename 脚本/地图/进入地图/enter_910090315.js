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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 1, 512000, 0, -15872, 354303);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.Hidden_background('0', 1, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs18#勇士部落南部", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_PushScaleInfo(1024000, 1, 512000, 1024000, -72448, 486655);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3##b(为什么要把我引导到这里呢？\r\n啊,遗物之光指向了前方。再往前走一点吧。)#k", 37, 1013358, false, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(768000, 1, 256000, 768000, 25600, 527104);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 270);
                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                  } else {
                    if (status === V++) {
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                            cm.Hidden_background('0', 1, 1, 0, 0);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, 0, 25600, 527104);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#跟遗迹中见到的东西一模一样。遗物是想让我找到这个吗……", 37, 1013358, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0##b(感觉到一股强大的能量传到了遗物中。\r\n最初触碰遗物时感觉到的……那种奇怪的力量。)#k", 37, 1013358, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/PF_34job/0", 0, 500, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Text(["#fn黑体##fs35##d呼呼……终于找到了。#k", ''], [50, 3600, 7, 0, -50, 0, 4, 3, 300, 300, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(4100);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Text(["#fn黑体##fs35##d重现古代之力的可能性。#k", ''], [50, 3900, 7, 0, -50, 0, 4, 3, 300, 300, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(4400);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_Text(["#fn黑体##fs35##d原来在这里也有。#k", ''], [50, 3000, 7, 0, -50, 0, 4, 3, 300, 300, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0##b(感觉古代之力逐渐充满,然后进入了遗物。\r\n但是……和力量一起潜入的残像,到底是……)#k", 37, 1013358, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0##b(穿着黑袍的怪人。场所是发现遗迹插图的地方。\r\n他就是研究室的主人吗？)#k", 37, 1013358, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#再过去看看吧。到隐秘的研究室去。", 37, 1013358, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('04', "Effect/Direction22.img/effect/PF_lab/4", 0, 500, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                                                      cm.sendNormalTalk_Bottom("#face0##b(重新翻找了一下,但都是以前见过的东西。\r\n关于他在遗迹中举行了什么仪式,没有找到任何相关的线索。)#k", 37, 1013358, false, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face6##b(可以肯定的是,他也拥有古代之力。\r\n而且很可能是来自异次元的人。)#k", 37, 1013358, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0##b(另外,撰写<古代之力和冒险岛世界>的研究书籍的作者的名字。\r\n就是……)#k", 37, 1013358, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer('04', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.effect_Text(["#fn黑体##fs35#《奇拉》", ''], [50, 2000, 4, 0, 0, 0, 4, 3, 300, 300, 0, 0]);
                                                                                  cm.forceStartQuest(35931, '');
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129);
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
                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                          cm.dispose();
                                                                                          cm.warp(104000000, 0, false);
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}