var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_PlayBGM("Bgm48.img/EveningPrimrose", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 953, -131);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("真实之药调制方法。", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.SitOnDummyPortableChair(3018035, 1);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("晒干捣碎的石竹花瓣三勺，发光蘑菇粉末两勺，", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("大眼青蛙卵一勺，隔水熬制后……", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("最后放入一撮月光……", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.SitOnDummyPortableChair(3018036, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(6000, 0, 2000, 6000, 409, -528);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(8000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("按照古老的传说，\r\n任何谎言都不能骗过#r月亮#k。", 0);
                              cm.effect_Voice("Voice3.img/DLep5/pangM/A_1.mp3", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue(" ", 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("蓄满了雨水的乌云，\r\n深夜中的迷雾，都无法避开月亮。", 0);
                                  cm.effect_Voice("Voice3.img/DLep5/pangM/A_2.mp3", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue(" ", 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("因此如果有什么真的很想很想知道的东西，\r\n只要去问问月亮就行。", 1);
                                      cm.effect_Voice("Voice3.img/DLep5/pangM/A_3.mp3", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("对于真正想知道的那个问题，月亮必定会如实回答。", 0);
                                        cm.effect_Voice("Voice3.img/DLep5/pangM/A_4.mp3", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue('', 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("即使……那个真相#r非常非常残酷#k……", 0);
                                            cm.effect_Voice("Voice3.img/DLep5/pangM/A_5.mp3", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue('', 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("#fs38#Episode V：影子炼金术士", 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue('', 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else if (status === V++) {
                                                          cm.dispose();
                                                          cm.warp(307090002, 0, false);
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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