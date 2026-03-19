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
      cm.setInGameDirectionMode(true, true);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/BalloonMsg0/2"], [1000, 0, -120]);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/BalloonMsg0/3"], [1000, 0, -120]);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/BalloonMsg0/4"], [1000, 0, -120]);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === V++) {
          cm.setInGameDirectionMode(false);
          cm.fieldEffect_ScreenMsg("lightning/screenMsg/0");
          cm.warp(927020050, 0);
          cm.dispose();
        } else {
          cm.dispose();
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;