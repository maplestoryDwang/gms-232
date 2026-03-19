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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_MoveAction(7);
      cm.inGameDirectionEvent_MoveAction(3);
      cm.inGameDirectionEvent_AskAnswerTime(10);
      cm.curNodeEventEnd(true);
    } else if (status === V++) {
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(false, true, false);
      cm.getTopMsgFont("顺着岩壁往上的话，可以到达海市蜃楼绝壁。", 3, 20, 8, 0, 0);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;