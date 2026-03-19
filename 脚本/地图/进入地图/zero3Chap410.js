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
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……已经获得了三个女神之泪了。已经过了一半了。", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("还有剩下两个，我们还要继续努力。", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('嗯。', 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.forceStartQuest(41912, '0');
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else if (status === V++) {
              cm.setInGameDirectionMode(false, true, false);
              cm.dispose();
              cm.warp(320000000, 0, false);
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;