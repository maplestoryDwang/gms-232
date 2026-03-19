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
      cm.effect_Direction("Effect/Direction100.img/BackGroundDirection/intro1", 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(743030001, 0, false);
    }
  }
}