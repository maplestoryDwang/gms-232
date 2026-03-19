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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, -1600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(5000, 1000, 5000, 0, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(5500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#那是……遗迹阿布拉克萨斯的本体！", 37, 1540805, false, true);
            } else if (status === V++) {
              cm.dispose();
              cm.warp(350123100, 0, true);
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