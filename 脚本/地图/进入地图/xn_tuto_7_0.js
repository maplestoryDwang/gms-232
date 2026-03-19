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
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(30);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(1);
            cm.inGameDirectionEvent_AskAnswerTime(210);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(2);
              cm.inGameDirectionEvent_AskAnswerTime(420);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(1);
                cm.inGameDirectionEvent_AskAnswerTime(420);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.inGameDirectionEvent_AskAnswerTime(420);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.sendNormalTalk("刚才的奇怪场面到底是什么呢？一回想脑海中就会出现噪音，让人无法继续回想。之前好像没有发生过这种事情啊……。", 3, 2159377, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/1"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("在格里梅尔博士回来之前，必须见见刚才那个人。她现在应该被关在监狱里。", 3, 2159377, false, true);
                      } else if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(2);
                        cm.curNodeEventEnd(true);
                        cm.dispose();
                        cm.warp(931050960, 0, false);
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
  }
}