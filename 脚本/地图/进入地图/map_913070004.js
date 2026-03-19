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
      cm.setStandAloneMode(true);
      cm.playerMessage(-1, "林伯特的杂货店");
      cm.playerMessage(-1, "冒险岛历XXXX年3月11日");
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction7.img/effect/tuto/step0/5", "oid=16777215"], [2000, 0, -100, 1, 0, 156, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction7.img/effect/tuto/step0/6", "oid=16777215"], [2000, 0, -100, 1, 0, 156, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction7.img/effect/tuto/step0/4", "oid=16777215"], [2000, 0, -100, 1, 0, 156, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction7.img/effect/tuto/step0/7", "oid=16777215"], [2000, 0, -100, 1, 0, 156, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction7.img/effect/tuto/step0/8", "oid=16777215"], [2000, 0, -100, 1, 0, 156, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else if (status === V++) {
                    cm.playerMessage(-1, "后院好像有人。到后院去看看吧。");
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.setStandAloneMode(false);
                    cm.forceStartQuest(20034, '');
                    cm.dispose();
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