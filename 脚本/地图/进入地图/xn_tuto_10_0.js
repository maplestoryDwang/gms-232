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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.updateInfoQuest(61585, "0=20200827;1=20200827");
        cm.updateInfoQuest(61585, "0=20200828;1=20200827");
        cm.setAccountQuestInfo(1025, "0=20200828;1=20200827;2=20200216;3=20200215");
        cm.updateInfoQuest(26011, '');
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(30);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(30);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/sig"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/luti"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2100);
          } else {
            if (status === V++) {
              cm.updateInfoQuest(32547, "lastDecTime=2020/08/28 00:03:03");
              cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -486, 43);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/0"], [900, 0, -120, 0, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(900);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/15"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/laser"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1800);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/16"], [1200, -110, -120, 0, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(931050990, 0, false);
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