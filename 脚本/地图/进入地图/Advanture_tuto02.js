var status = -1;
function action(f, E, e) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, true);
    cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
    cm.inGameDirectionEvent_AskAnswerTime(1950);
  } else if (status == 1) {
    cm.warp(4000010, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;