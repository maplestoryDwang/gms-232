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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(3500);
      cm.eventSKill(0);
      cm.onActionBarResult(6, -1);
      cm.effect_Direction("Effect/Direction5.img/unitedMaple/Scene2", 0, 0, 0);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(913050003, 0, true);
    }
  }
}