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
      cm.forceStartQuest(33123, '');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/flyingdeck", 100, 60);
      cm.sendNormalTalk_Bottom("#face3#你们都搞错了。", 37, 1540460, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/blackHeaven/BH_pic2", 0, 1500, 0, 0, 12, 4, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#不是你们的作战计划暴露了。\r\n等待你们的，不是陷阱，而是#r斯乌的结界#k！", 37, 1540460, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect2.img/blackHeaven/BH_pic3", 0, 1500, 0, 0, 13, 4, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#你们不知道斯乌也在黑色天堂上吧？\r\n那是当然啦。因为设计图上没有标注出来。", 37, 1540460, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#黑色天堂为什么能漂浮在空中呢？\r\n那自然多亏了吸收了奥尔卡之力的斯乌啦。", 37, 1540460, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#身体即是机器，机器即是身体！\r\n你可以把黑色天堂看做是庞大的斯乌。", 37, 1540460, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect2.img/blackHeaven/BH_pic1", 0, 1500, 0, 0, 14, 4, 0);
                    cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 200, 0, 0, 0, 0, 0);
                    cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 200, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#斯乌的结界包围着整个黑色天堂。\r\n黑色天堂并不存在什么漏洞。\r\n就像我所说的，黑色天堂就如同#r放大的斯乌的肉身#k。", 37, 1540460, false, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 200, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#不过，有一点……\r\n有一个十分有趣的地方。", 37, 1540460, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#黑色天堂的兵力。\r\n你难道不想知道黑色天堂的兵力是从哪里冒出来的吗？", 37, 1540460, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#你说当然是黑色天堂内部？\r\n叮！错啦！", 37, 1540460, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#黑色天堂的兵力并非搭载在黑色天堂内部。\r\n#fs20#而是从某个地方召唤来的！", 37, 1540460, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 10);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                        cm.setAmbience("Ambience.img/secretmissionbase", 100, 60);
                                        cm.playSoundEffDirectly("Ambience.img/flyingdeck");
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(14000, 1000, 14000, 0, 3300);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 15000, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/blackHeaven/title2", 0, 1500, 0, 0, 12, 4, 0);
                                                cm.playSoundEffDirectly("Ambience.img/secretmissionbase");
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/signal_s", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(5300);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 200, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else if (status === V++) {
                                                    cm.dispose();
                                                    cm.warp(350040000, 0, true);
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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