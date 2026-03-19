var status = -1;
var selectionLog = [];
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
  } else if (status === V++) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, true, true);
    cm.setStandAloneMode(true);
    cm.inGameDirectionEvent_MoveAction(2);
    cm.curNodeEventEnd(true);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;