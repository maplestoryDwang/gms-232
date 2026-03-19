var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/blackHeaven/nexon", 0, 1500, 0, 0, 12, 4, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 5000, -43, -825);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(277);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 200, -43, 25);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(4500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                      cm.effect_Text(["#fn黑体##fs18#作战开始5天前   #fs15##fn黑体#黑色之翼基地上空"], [100, 4500, 6, -50, -50, 1, 4, 0, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(4500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 1300, 0, 0, 0);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('01', "Map/Effect2.img/blackHeaven/mia", 0, 1500, 0, 0, 15, 4, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(15000, 1000, 8000, 0, 0);
                                cm.effect_Voice("Game.img/MonsterBattleDraw", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("那哥哥你先跳啊？", 37, 1540503, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("不要。我刚刚看见你晚出了，德皮。", 37, 1540502, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我什么时候？\r\n如果你不相信，不如我们再来一次？", 37, 1540503, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("重新来。", 37, 1540502, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("那好。石头，剪刀，布！", 37, 1540503, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1500, 0, 0, 0, 0, 0);
                                                  cm.dispose();
                                                  cm.warp(350011010, 0, true);
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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