var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.effect_Direction("Effect/Direction100.img/TimeLine/timeLine3", 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(4500);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(743020402, 0);
      cm.setInGameDirectionMode(false, false, false);
    }
  }
}