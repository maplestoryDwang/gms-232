var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.effect_Direction("Effect/Direction100.img/BackGroundDirection/intro6", 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === V++) {
      cm.setInGameDirectionMode(false, false, false);
      cm.dispose();
      cm.warp(743030003, 0);
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