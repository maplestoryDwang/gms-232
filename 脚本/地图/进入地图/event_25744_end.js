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
      cm.sendNormalTalk("被消灭的这些家伙完全不知道圣物的事。", 17, 0, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("而且现在也感觉不到邪恶的气息。失败了吗？", 17, 0, true, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(600);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(1);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_AskAnswerTime(600);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我该冷静地思考一下。最好先把此事告诉卡塔利安。", 17, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("既然他说正在对那些奇怪的祭司进行某种调查，我先回去想想对策吧。", 17, 0, true, true);
                  } else if (status === V++) {
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.dispose();
                    cm.warp(400000000, 4, false);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}