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
      cm.forceCompleteQuest(58783);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 4);
      cm.gainExp(Math.pow(cm.getLevel(), 3) * 4);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1700, -800);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 10000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(10000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/JPzipang/ending1", 0, 1500, 0, 0, 14, 4, 0, -1, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(7000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/JPzipang/ending2", 0, 1500, 0, 0, 14, 4, 0, -1, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(7000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/JPzipang/ending3", 0, 1500, 0, 0, 14, 4, 0, -1, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(7000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/JPzipang/ending4", 0, 1500, 0, 0, 14, 4, 0, -1, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(7000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/JPzipang/ending5", 0, 1500, 0, 0, 14, 4, 0, -1, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(7000);
                                  cm.updateInfoQuest(49009, "MultiKC=32;QET=QJy2xbHX1QE$");
                                  cm.updateInfoQuest(49009, "QET=QJy2xbHX1QE$");
                                  cm.updateInfoQuest(49009, "QET=QJy2xbHX1QE$");
                                  cm.forceStartQuest(49009, '');
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/JPzipang/ending6", 0, 1500, 0, 0, 14, 4, 0, -1, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(7000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(7000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_MonologueScroll('', 0, 4, 10, 3);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_MonologueScroll('', 1, 4, 10, 3);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.setAmbience("BgmJp4_Zipang.img/Kamuna", 100, 60);
                                                    cm.sendNormalTalk_Bottom("#face0#……。", 37, 9111023, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#……你的怨恨，就由我带走吧。", 37, 9111075, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_SlideText("\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                                蘑菇神社异闻录<完>", 1, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else if (status === V++) {
                                                                  cm.warp(800000000, 2, false);
                                                                  cm.inGameDirectionEvent_SetHideEffect(0);
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
        }
      }
    }
  }
}