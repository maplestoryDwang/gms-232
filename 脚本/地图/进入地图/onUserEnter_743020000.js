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
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_OneTimeAction(379, 20500);
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/illustration/ChivalrousLogo_1/0", "oid=0"], [10000, 0, -50, 1, 0, 1, 1, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(10000);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(743020103, 0, false);
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.setInGameDirectionMode(false, true, false);
    }
  }
}