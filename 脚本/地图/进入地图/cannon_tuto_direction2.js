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
      cm.fieldEffect_PlayFieldSound("cannonshooter/bang", 100);
      cm.curNodeEventEnd(true);
      cm.effect_Direction("Effect/Direction4.img/cannonshooter/Scene01", 0, 0, 0);
      cm.effect_Direction("Effect/Direction4.img/cannonshooter/out02", 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(912060500, 0, false);
    }
  }
}