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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_PushMoveInfo(0, 500, 575, 865);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2825);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('不行！走这条路不行！', 1, 9390313, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/27"], [2000, -500, -200, 1, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("汤姆……我们疼着呢,别捣乱。", 1, 9390320, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我无法再忍受那种玩笑了！", 1, 9390318, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("现在谁都不会相信我了……呜……妈妈……你去哪了，我想你……", 1, 9390313, true, true);
                  } else if (status === V++) {
                    cm.OnStartNavigation(866000115, 0, '', 0);
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                    cm.setStandAloneMode(false);
                    cm.dispose();
                    cm.warp(866000000, 6, false);
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
}