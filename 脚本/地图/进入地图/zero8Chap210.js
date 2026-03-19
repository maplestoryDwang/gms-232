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
      cm.npc_ChangeController(2480008, "oid=28037", 1550, -25, 16, 1500, 1600, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b(这里是…… 影子神殿……？#p2400006#去哪里了？", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b(说是让我看到我所遗忘的记忆…… 在这里我遗忘了什么啊？)", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b(不知道…… 先去前面看看吧。)", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(2);
              cm.inGameDirectionEvent_AskAnswerTime(8000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#b(等下…… 那个是…… 米露？！为什么在这…？这确实是我的记忆吗？分明我…… 没在这里见过米露啊……？！)", 41, 2400005, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;