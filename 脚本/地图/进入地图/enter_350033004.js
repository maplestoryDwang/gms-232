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
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.playVideoByScript("BlackHeaven3.avi");
      cm.curNodeEventEnd(true);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(350033100, 0, true);
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;