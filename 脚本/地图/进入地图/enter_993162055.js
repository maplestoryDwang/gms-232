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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, -33);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
            cm.fieldEffect_BackgroundCanvas(1, 70, 70, 70, 1000, 0, 0);
            cm.fieldEffect_BackgroundCanvas(4, 70, 70, 70, 1000, 0, 0);
            cm.fieldEffect_BackgroundCanvas(2, 70, 70, 70, 1000, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
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
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, -33);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我走近雕像，把手放在上面，却没听到任何话语。\r\n既没给我答复，也没给我指明方向……)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(就在这时，我忽然收到了一封没有署名的信。\r\n难道是杰罗姆回到王国了？)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\nX点准时到最高的尖塔上见面。", 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("我在塔顶上等你。", 1);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#里斯托尼亚王国最高的尖塔……\r\n是杰罗姆来信吗？", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_Hero9(0, 1000);
                                      cm.inGameDirectionEvent_AskAnswerTime(1300);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                        cm.fieldEffect_Hero9(100, 500);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
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
                                                  cm.warp(993162056, 0, false);
                                                  cm.setStandAloneMode(false);
                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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