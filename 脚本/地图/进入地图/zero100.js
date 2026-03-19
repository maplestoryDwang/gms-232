var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(40050)) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(2400025, "oid=23559", -868, 35, 14, -918, -818, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("…………", 41, 2400006, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……这就是时空通道吗？哼，你在观望什么？不要傻站着，快点动动啊。", 41, 2400005, true, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(7000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("这就是……通往冒险岛世界的通道吗，用这个传送门就能到达冒险岛世界。", 41, 2400005, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk('#b(点头)', 41, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#b(……说真的，这家伙除了长相之外，还真难以相信和我是同一个人。我怎么可能会摆这一副呆呆的面孔？)", 41, 2400005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk('去看一下。', 41, 2400005, true, true);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;