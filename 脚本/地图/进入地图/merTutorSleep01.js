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
      cm.effect_Direction("Effect/Direction5.img/mersedesTutorial/Scene1", 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(3300);
      cm.warp(101050010);
    } else if (status === V++) {
      cm.warp(101050010);
      cm.setInGameDirectionMode(false, false, false);
      cm.dispose();
      cm.warp(101050010);
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;