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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1100, 0, -200, 100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1100, 1500, -200, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1300, 0, -200, -1200);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1100, 1500, -200, -1300);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1100, 0, -200, -1900);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(200);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1100, 1500, -200, -2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -300, 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 2000, 0, 0);
                                      } else {
                                        if (status === V++) {
                                          cm.cameraSwitch_CameraSwitchBack();
                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("呃啊！原来还有这样的地方啊？怎么回事？\r\n这里…我完全没有印象啊…\r\n噢？那是！", 37, 2155104, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 100, -2000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我记得…那个。原本要走到那边去。\r\n不过，这个，嗯。", 37, 2155121, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -300, 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 2000, 0, 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.cameraSwitch_CameraSwitchBack();
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("没有办法了。无论如何，我们都要到那边去看看，朋友。", 37, 2155104, false, true);
                                                          } else if (status === V++) {
                                                            cm.eventSKill(0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.setPartner(1, 2155104, 80001702, 0);
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