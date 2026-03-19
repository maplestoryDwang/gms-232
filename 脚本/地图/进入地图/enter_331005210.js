var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.getPlayer().getGender() == 0) {
    var V = 1531000;
  } else {
    var V = 1531052;
  }
  ;
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm43.img/Unknown Part Of City", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, 0);
    } else {
      if (status === O++) {
        cm.curNodeEventEnd(true);
        cm.onActionBarResult(6, -1);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === O++) {
          cm.inGameDirectionEvent_PushScaleInfo(12000, 0, 1000, 12000, 0, 0);
        } else {
          if (status === O++) {
            cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/kinesis/interview", 0, 1500, 0, 0, 12, 4, 0, -1, 0, 0, 0);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/camera", 100);
            cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/Kinesis/news_03", 100);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === O++) {
              cm.getTopMsgFont("最新消息", 3, 20, 20, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === O++) {
                cm.getTopMsgFont("陷坑产生时一同失踪的居民，有部分现在平安地回来了。", 3, 20, 20, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === O++) {
                  cm.getTopMsgFont("令人更为震惊的是，他们的经历几乎完全一致。", 3, 20, 20, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === O++) {
                    cm.getTopMsgFont("详细内容，请听现场报道。", 3, 20, 20, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === O++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/camera", 100);
                      cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === O++) {
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, -200);
                      } else {
                        if (status === O++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === O++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                          } else {
                            if (status === O++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === O++) {
                                cm.effect_Text(["#fn黑体##fs26#相同时刻,  都市"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === O++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(11000, 0, 1000, 11000, 0, 200);
                                } else {
                                  if (status === O++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(7000);
                                  } else {
                                    if (status === O++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                    } else {
                                      if (status === O++) {
                                        cm.sendNormalTalk_Bottom("没想到你成长得超乎想象地快嘛。", 37, 1531005, false, true);
                                      } else {
                                        if (status === O++) {
                                          cm.sendNormalTalk_Bottom("虽然能看着你变强是一件开心的事情……", 37, 1531005, true, true);
                                        } else {
                                          if (status === O++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === O++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(6000, 0, 1000, 6000, 0, 200);
                                            } else {
                                              if (status === O++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === O++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === O++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === O++) {
                                                      cm.sendNormalTalk_Bottom("#face0#……果然，再继续拖延下去就难办了。", 37, 1531005, false, true);
                                                    } else {
                                                      if (status === O++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else if (status === O++) {
                                                        cm.warp(101020400, 0, true);
                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                        cm.setStandAloneMode(false);
                                                        cm.eventSKill(0);
                                                        cm.setInGameDirectionMode(false, true, false);
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