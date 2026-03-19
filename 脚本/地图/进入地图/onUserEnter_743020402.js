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
      cm.inGameDirectionEvent_AskAnswerTime(5000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_OneTimeAction(379, 0);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/illustration/kairin/0", "oid=0"], [5000, 0, 0, 1, 0, 1, 1, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else if (status === V++) {
        cm.dispose();
        cm.warp(743000600, 0, false);
        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
        cm.setInGameDirectionMode(false, true, false);
      }
    }
  }
}