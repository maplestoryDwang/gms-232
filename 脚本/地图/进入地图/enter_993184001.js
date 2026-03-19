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
      cm.updateInfoQuest(100624, "today=0");
      cm.updateInfoQuest(100625, "today=0");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -300, -1430);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_Text(["#fn黑体##fs25##fc0xFF00e1ff#噢~你是接到萧公邀请的那个人吗？", ''], [100, 1600, 4, 0, 0, 0, 4, 3, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(5000);
            cm.effect_Voice("Voice2.img/awake2020/1", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
              cm.effect_Text(["#fn黑体##fs25##fc0xFF00e1ff#我看你似乎也对修炼挺感兴趣哦？", ''], [100, 1600, 4, 0, 0, 0, 4, 3, 0, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(5000);
                cm.effect_Voice("Voice2.img/awake2020/2", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                    cm.effect_Text(["#fn黑体##fs18#觉醒山，仙人沉睡之处", ''], [100, 500, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 1000, 8000, -50, -1450);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                        cm.effect_Text(["#fn黑体##fs25##fc0xFF00e1ff#此处是诸多神仙们为了达到最高境界而进行修炼的地方。", ''], [100, 1600, 7, 0, -60, 0, 4, 0, 0, 0, 0, 0]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(7000);
                          cm.effect_Voice("Voice2.img/awake2020/3", 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(10000, 0, 1000, 10000, 150, -800);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                              cm.effect_Text(["#fn黑体##fs25##fc0xFF00e1ff#即便是已经达到融会贯通境界的人，也可以在这里无限地发掘新的自我。", ''], [100, 2100, 7, 0, -60, 0, 4, 0, 0, 0, 0, 0]);
                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=0;q3Set=0;q4Set=1;start=0;q5Set=1;lT=20/04/19;qSetDate=21/01/29;accSum=548949;QuestCount=3;accCheck=210129230732696");
                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=0;q3Set=0;q4Set=1;start=0;q5Set=1;lT=20/04/19;qSetDate=21/01/29;accSum=609480;QuestCount=3;accCheck=210129230732696");
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(9000);
                                cm.effect_Voice("Voice2.img/awake2020/4", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(10000, 0, 1000, 10000, 100, -150);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    cm.effect_Text(["#fn黑体##fs25##fc0xFF00e1ff#如果你想让自己的成长再上一个阶段……你就来对地方了。", ''], [100, 2100, 7, 0, -60, 0, 4, 0, 0, 0, 0, 0]);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(9000);
                                      cm.effect_Voice("Voice2.img/awake2020/5", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 400, 5000, 200, -600);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          cm.effect_Text(["#fn黑体##fs25##fc0xFF00e1ff#欢迎来到觉醒山。", ''], [100, 1500, 7, 0, -60, 0, 4, 0, 0, 0, 0, 0]);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                            cm.effect_Voice("Voice2.img/awake2020/6", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else if (status === V++) {
                                                    cm.setStandAloneMode(false);
                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.updateInfoQuest(501094, "start=1;mapTuto=1");
                                                    cm.dispose();
                                                    cm.warp(993184000, 0, false);
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}