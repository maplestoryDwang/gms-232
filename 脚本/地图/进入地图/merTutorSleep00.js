var status = -1;
function action(f, E, e) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.effect_Direction("Effect/Direction5.img/mersedesTutorial/Scene0", 0, 0, 0);
    cm.inGameDirectionEvent_AskAnswerTime(14000);
  } else if (status == 1) {
    cm.setInGameDirectionMode(false, false, false);
    cm.dispose();
    cm.warp(101050010, 0);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;