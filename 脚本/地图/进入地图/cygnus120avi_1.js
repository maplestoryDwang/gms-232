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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.playVideoByScript("cygnusReturns.avi");
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_ScreenMsg("xenon/text8");
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
        cm.warp(130000200, 0, false);
      }
    }
  }
}