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
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……找回了第二个女神之泪，从此我们也成长了很多。", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("……#p2430000#现在会幸福吗？", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("就是啊。我们让他幸福不就可以了吗？", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face4#嗯，说的也是……", 41, 2400006, true, true);
            } else if (status === V++) {
              cm.forceStartQuest(41912, '0');
              cm.dispose();
              cm.warp(320000000, 0, false);
              cm.setInGameDirectionMode(false, true, false);
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