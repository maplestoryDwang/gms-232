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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
      cm.onActionBarResult(5, 1013);
    } else if (status === V++) {
      cm.eventSKill(0);
      cm.setInGameDirectionMode(false, true, false);
      cm.playerMessage(-1, "请在消灭该区域内的所有怪物后，前往下一个地图。");
      cm.dispose();
    }
  }
}