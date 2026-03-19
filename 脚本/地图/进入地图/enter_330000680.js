var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(33524) && cm.getNumberFromQuestInfo(33524, "enter") == 0) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(330002622, 0);
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;