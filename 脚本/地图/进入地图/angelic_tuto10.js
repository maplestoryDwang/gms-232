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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(60);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("到了。下面你要让我找什么？", 17, 3000132, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("圣物原来放的地方你没发现什么吗？", 1, 3000132, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg2/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("虽不是什么好东西，你戴在手上看看吧。", 1, 3000132, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("嗯……就这样戴上去就行了？", 17, 3000132, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("好了，下面我就把力量传给你！", 1, 3000132, true, true);
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(940012000, 0, false);
                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                  cm.setInGameDirectionMode(false, true, false);
                }
              }
            }
          }
        }
      }
    }
  }
}