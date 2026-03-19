var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.effect_Direction("Effect/Direction8.img/lightningTutorial/Scene1");
      cm.inGameDirectionEvent_AskAnswerTime(9000);
    } else if (status === V++) {
      cm.curNodeEventEnd(false);
      cm.setInGameDirectionMode(false, true);
      cm.warp(927020070, 0);
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;