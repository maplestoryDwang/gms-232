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
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 50, -780);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 0, -720);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
                cm.effect_Text(["#fn黑体##fs18#潜入内部20小时后   #fs15##fn黑体#埃德尔斯坦上空"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(6500, 1500, 6500, -240, 180);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(6000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(350062000, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;