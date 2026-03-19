var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/9", 'oid=0'], [3500, 0, -100, 1, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(3500);
    } else if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.dispose();
      cm.warp(910150005, 0);
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;