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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/1", 128);
      cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect2.img/HofM/ACT1_text/0", 0, 2500, 0, -70, 12, 7, 1);
      cm.inGameDirectionEvent_AskAnswerTime(3500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 500, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/2", 128);
          cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect2.img/HofM/ACT1_text/1", 0, 2500, 0, -70, 12, 7, 1);
          cm.inGameDirectionEvent_AskAnswerTime(6700);
        } else {
          if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 500, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(10000, 1000, 10000, 0, 0);
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
                        cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/3", 128);
                        cm.fieldEffect_ProcessOnOffLayer('3', "Map/Effect2.img/HofM/ACT1_text/2", 0, 2500, 0, -70, 12, 7, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 500, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/4", 128);
                            cm.fieldEffect_ProcessOnOffLayer('4', "Map/Effect2.img/HofM/ACT1_text/3", 0, 2500, 0, -70, 12, 7, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(4800);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('4', '', 2, 500, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else if (status === V++) {
                                cm.dispose();
                                cm.warp(350100010, 0, true);
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