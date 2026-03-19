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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -5, 972);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
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
              cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -5, 182);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#我和饕餮慌忙追赶怪物的气息。", 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("经过一片茂密的森林，龙之地便映入眼帘。", 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("所到之处是寒冷的飞龙峡谷。", 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("怪物貌似就藏在那里。", 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("还有……", 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("我运气不错，在峡谷入口听说了一个令人感兴趣的传闻。", 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("“大海兽变透明了！”", 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("大海兽被称为峡谷的主人龙怪。", 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("\r\n听闻此言，饕餮确定了怪物的所在。", 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("藏在峡谷里的怪物就是……", 1);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                    cm.warp(240040400, 5, false);
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
}