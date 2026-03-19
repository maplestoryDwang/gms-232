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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -300, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(12000, 1000, 12000, 300, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/6", 128);
              cm.fieldEffect_ProcessOnOffLayer('6', "Map/Effect2.img/HofM/ACT1_text/6", 0, 2500, 0, -70, 12, 7, 1);
              cm.inGameDirectionEvent_AskAnswerTime(9000);
            } else {
              if (status === V++) {
                cm.fieldEffect_ProcessOnOffLayer('6', '', 2, 500, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/NAR/7", 128);
                  cm.fieldEffect_ProcessOnOffLayer('7', "Map/Effect2.img/HofM/ACT1_text/7", 0, 2500, 0, -70, 12, 7, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(7700);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('7', '', 2, 500, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else if (status === V++) {
                        cm.dispose();
                        cm.warp(350100020, 0, true);
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