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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_ScreenMsg("xenon/text1");
        cm.inGameDirectionEvent_AskAnswerTime(800);
      } else {
        if (status === V++) {
          cm.fieldEffect_ScreenMsg("xenon/text2");
          cm.inGameDirectionEvent_AskAnswerTime(800);
        } else {
          if (status === V++) {
            cm.fieldEffect_ScreenMsg("xenon/text3");
            cm.inGameDirectionEvent_AskAnswerTime(800);
          } else {
            if (status === V++) {
              cm.fieldEffect_ScreenMsg("xenon/text4");
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.fieldEffect_ScreenMsg("xenon/text5");
                cm.inGameDirectionEvent_AskAnswerTime(800);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ScreenMsg("xenon/text6");
                  cm.inGameDirectionEvent_AskAnswerTime(800);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ScreenMsg("xenon/text7");
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ScreenMsg("xenon/text8");
                      cm.inGameDirectionEvent_AskAnswerTime(800);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ScreenMsg("xenon/text10");
                        cm.inGameDirectionEvent_AskAnswerTime(800);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ScreenMsg("xenon/text11");
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ScreenMsg("xenon/text12");
                            cm.inGameDirectionEvent_AskAnswerTime(5250);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ScreenMsg("xenon/text13");
                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(931050930, 0, false);
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