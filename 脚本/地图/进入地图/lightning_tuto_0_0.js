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
      cm.setInGameDirectionMode(true, true);
      cm.effect_Direction("Effect/Direction8.img/lightningTutorial/Scene0");
      cm.inGameDirectionEvent_AskAnswerTime(3300);
    } else if (status === V++) {
      cm.setInGameDirectionMode(false);
      cm.warp(927020000, 0, false);
      cm.dispose();
    }
  }
}