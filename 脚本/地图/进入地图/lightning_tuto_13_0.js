var status = -1;
function action(f, E, e) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.effect_Direction("Effect/Direction8.img/lightningTutorial2/Scene4", 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(10000);
      cm.eventSKill(0);
      cm.effect_PlayMusic("MiniGame.img/Open");
    } else if (status === V++) {
      cm.dispose();
      cm.warp(910141030, 0, false);
      cm.setInGameDirectionMode(false, true, false);
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;