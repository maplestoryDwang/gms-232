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
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.getMap().getWeatherEffectNotice("做得很好！赶快从右侧的出口下去吧。", 147, 30000, 1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else if (status === V++) {
      cm.inGameDirectionEvent_SetHideEffect(0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(false, true);
      cm.setStandAloneMode(false);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;