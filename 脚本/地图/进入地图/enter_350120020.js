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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 1525, 50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onSetMapObjectCreateLayerMore('HofM_04', 2, "animation_1", 1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.fieldEffect_Hero8(1);
            cm.fieldEffect_Hero9(40, 1000);
            cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT2/NAR/4", 128);
            cm.fieldEffect_ProcessOnOffLayer('3', "Map/Effect2.img/HofM/ACT2_text/3", 0, 2500, 0, -70, 12, 7, 1);
            cm.inGameDirectionEvent_AskAnswerTime(5600);
          } else {
            if (status === V++) {
              cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 500, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT2/NAR/5", 128);
                cm.fieldEffect_ProcessOnOffLayer('4', "Map/Effect2.img/HofM/ACT2_text/4", 0, 2500, 0, -70, 12, 7, 1);
                cm.inGameDirectionEvent_AskAnswerTime(8000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ProcessOnOffLayer('4', '', 2, 500, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT2/NAR/6", 128);
                    cm.fieldEffect_ProcessOnOffLayer('5', "Map/Effect2.img/HofM/ACT2_text/5", 0, 2500, 0, -70, 12, 7, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(8000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('5', '', 2, 500, 0, 0, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(350120000, 0, true);
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