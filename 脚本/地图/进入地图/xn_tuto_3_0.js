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
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(2159377, "oid=23858747", -200, 50, 9, -250, -150, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=23858747", "summon", 0, 0);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/doorOpen", "oid=0"], [0, -15, 2, 1, 0, 1, 1, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/8", "oid=23858747"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/9", "oid=23858747"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/10", "oid=23858747"], [1200, 30, -250, 1, 0, 1, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/8", "oid=23858747"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/7", "oid=23858747"], [1200, 0, -250, 1, 0, 1, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else if (status === V++) {
                  cm.npc_LeaveField("oid=23858747");
                  cm.dispose();
                  cm.warp(931060081, 0, false);
                }
              }
            }
          }
        }
      }
    }
  }
}