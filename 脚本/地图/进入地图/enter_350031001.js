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
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/signal_l", 100);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 266, -277);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
          cm.inGameDirectionEvent_AskAnswerTime(4500);
          cm.effect_Text(["#fn黑体##fs18#第二天早上   #fs15##fn黑体#水晶花园"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.userSetFieldFloating(350031001, 0, 0, 0);
            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 6000, -101, -180);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(5400);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(350031002, 0, true);
                cm.setInGameDirectionMode(false, true, false);
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