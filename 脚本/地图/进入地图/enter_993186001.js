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
      cm.setInGameDirectionMode(true, true, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 650, -250);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.playerMessage(-1, "蓝色满月之下，妖精派对隆重登场。");
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(6000, 0, 1000, 6000, -10, -419);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(6000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(6000, 0, 600, 6000, -10, -100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(6000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(993186000, 1, false);
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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