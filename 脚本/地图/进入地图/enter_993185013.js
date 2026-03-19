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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -100, -113);
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -85, -124);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face3#海蜇号上只有两个逃生舱……。", 36, 3004850, false, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#但这次……不抽签了。", 36, 3004850, true, true, 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                  cm.sendNormalTalk_Bottom('我什么都没看见……。', 56, 0, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 500, 0, -85, -124);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('啊……！来了！！！', 56, 0, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("等等，休麦之前说的#r大海#k难道是……！", 56, 0, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayBGM("Ambience.img/WSappear_loop", 0, 0);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -750, 3950);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(20000, 0, 2000, 20000, -300, 3950);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(15000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1300);
                                          } else if (status === V++) {
                                            cm.dispose();
                                            cm.warp(993185014, 0, true);
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