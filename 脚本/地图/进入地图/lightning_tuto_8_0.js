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
      cm.effect_Direction("Effect/Direction8.img/lightningTutorial/Scene2");
      cm.effect_Voice("Voice.img/DarkMage/5");
      cm.inGameDirectionEvent_AskAnswerTime(5000);
    } else if (status === V++) {
      cm.setInGameDirectionMode(false);
      cm.warp(910141000, 0);
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