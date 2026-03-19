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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, -440, -324);
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
            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, 74, -60);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                cm.inGameDirectionEvent_AskAnswerTime(1600);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#我们到了炽热的太阳之地阿里安特。", 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("无边无际的沙丘、椰子树、绿洲。", 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("那地方的沙漠景象令人印象深刻。", 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("\r\n不过可能是因为风沙的关系，怪物并不好找呢。", 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("我正想去村里转一转，看看有没有什么有趣的见闻。", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue('我们听说了一个传闻。', 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("\r\n“干枯的仙人掌在吸收绿洲！”", 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("\r\n饕餮和我预感到异常。", 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("然后便立刻前往传闻中所指的地方。", 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                              cm.warp(260010200, 1, false);
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