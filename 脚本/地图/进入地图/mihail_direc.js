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
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.effect_Direction("Effect/Direction7.img/mikhail/1st_Job", 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(130000000, 0, false);
      cm.setInGameDirectionMode(false, true);
      cm.setStandAloneMode(false);
    }
  }
}