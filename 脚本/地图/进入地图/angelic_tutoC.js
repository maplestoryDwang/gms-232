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
      cm.playVideoByScript("angelic.avi");
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else if (status === V++) {
        cm.gainItem(1142495, 1);
        cm.dispose();
        cm.warp(400000000, 0, false);
        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
        cm.setInGameDirectionMode(false, true, false);
      }
    }
  }
}