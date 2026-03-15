var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.getMap().getNumMonsters() != 0) {
    cm.getTopMsgFont("目前仍无法移动. 请消灭野外的敌人!", 3, 20, 20, 0);
    cm.playerMessage(5, "目前仍无法移动. 请消灭野外的敌人!");
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(7);
      cm.inGameDirectionEvent_AskAnswerTime(200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else if (status === V++) {
        cm.dispose();
        cm.warp(350042450, 0, false);
        cm.setInGameDirectionMode(false, true, false);
      }
    }
  }
}