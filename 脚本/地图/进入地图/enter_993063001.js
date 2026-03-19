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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -860, -921);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(5000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction20.img/effect/BM2_totheBS/0", 0, 500, 0, -80, 12, 4, 1);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('#face1#……', 37, 3003750, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 500, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/horn", 100);
                      cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM2_totheBS_spine/totheBS", "animation", '', '04'], [0, 0, 0, 0, 0, 0, 0, 1]);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#全体舰队向黑太阳前进！", 37, 3003750, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_取消复合图片动画('04', 1, 500);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                  cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 3000, 5000, -880, -1000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.forceStartQuest(35753, '');
                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
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
                                              cm.dispose();
                                              cm.warp(993063043, 0, false);
                                              cm.setStandAloneMode(false);
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