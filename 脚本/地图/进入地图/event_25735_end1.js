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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg0/4"], [1200, 0, -120, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("感觉不到邪恶的气息，无法继续追击了。", 17, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("他们肯定有什么阴谋。得赶紧把这件事告诉卡塔利安。", 17, 0, true, true);
          } else if (status === V++) {
            cm.forceStartQuest(25802, '1');
            cm.eventSKill(0);
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose();
            cm.warp(400000000, 0, false);
          }
        }
      }
    }
  }
}