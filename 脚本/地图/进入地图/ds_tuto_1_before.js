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
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.fieldEffect_ScreenMsg("demonSlayer/text8");
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_ScreenMsg("demonSlayer/text9");
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else if (status === V++) {
          cm.dispose();
          cm.warp(927000010, 1, true);
        }
      }
    }
  }
}