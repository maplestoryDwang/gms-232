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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face8#结果我亲手把姐姐……", 37, 3003508, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face8#为什么……会变成这样。到底哪里出了错？", 37, 3003508, true, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect3.img/esfera/decide/0", 0, 2000, 0, -80, 12, 4, 1);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face8#这……是？力量……正在流进来……？", 37, 3003508, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#暗之执行者，你错了。", 37, 3003504, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#是的，我暗之执行者错了。", 45, 3003515, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#黑暗是塔纳，光明是艾欧娜。", 37, 3003504, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#光明是艾欧娜，黑暗是塔纳。", 45, 3003515, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayBGM("Bgm47/ArcanaBoss", 0, 0);
                              cm.sendNormalTalk_Bottom("#face0#膜拜吧，光明超越者艾欧娜。", 37, 3003504, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#膜拜光明超越者艾欧娜吧。", 45, 3003515, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face9#我是……艾欧娜……？", 37, 3003508, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("塔纳是光明超越者艾欧娜？！", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face9#我听到了#r声音#k……这……你说得对。我无法摆脱。", 37, 3003508, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("无法摆脱？摆脱什么？", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face9#感觉到了……缠住我的锁链……绝对无法解开。", 37, 3003508, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face9#但是……", 37, 3003508, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('01', "Map/Effect3.img/esfera/decide/1", 0, 500, 0, -80, 12, 4, 1);
                                                    cm.sendNormalTalk_Bottom("#face9#……你是不会得逞的。", 37, 3003508, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face9#我要按照我的样子活下去。\r\n就算代价是失去拥有的一切……", 37, 3003508, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 10, 0, 0, 0, 0, 0);
                                                        cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 500, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("我要按照我的样子活下去……", 57, 0, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#塔纳原来是#b艾欧娜#k。现在我理解了。", 37, 3003501, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#先离开这里再说。", 37, 3003501, true, true);
                                                            } else if (status === V++) {
                                                              cm.updateInfoQuest(34560, "30=h0;50=h0;31=h0;51=h0;32=h1;52=h0;33=h1;53=h0;34=h0;54=h0;35=h0;55=h0;36=h0;56=h0;37=h0;57=h0;38=h0;58=h1;39=h0;59=h0;40=h0;60=h0;41=h0;42=h0;43=h0;44=h0;45=h0;46=h0;47=h0;48=h0;49=h0");
                                                              cm.forceCompleteQuest(34584);
                                                              cm.dispose();
                                                              cm.warp(450007240, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;