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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(7200);
      cm.effect_Direction("Effect/Direction9.img/KaiserStory/Scene0", 0, 0, 0);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(940010090, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(false, true, false);
    }
  }
}