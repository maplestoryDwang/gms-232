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
      cm.sendNormalTalk("#b(这一地区好像完全变成了废墟。)#k", 3, 2159310, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.sendNormalTalk("#b(#p2159310#不知道有没有把秘密通道堵上。但是以他的性格，应该不会去管……)#k", 3, 2159310, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b(在城堡入口附近找找看吧。)#k", 3, 2159310, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
              cm.setInGameDirectionMode(false, true, false);
              cm.sendNormalTalk("#b(在上面吗？)#k", 16, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#b(过去经常到这里来。像#p2159308#之类会瞬间移动的军团长，应该用不着这样……)#k", 16, 0, false, true);
              } else if (status === V++) {
                cm.sendNormalTalk("#b(记得好像在右侧岗楼的上面。)#k", 16, 0, true, true);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}