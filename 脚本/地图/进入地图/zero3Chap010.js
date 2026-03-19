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
      cm.npc_ChangeController(2440021, "oid=25926", -3519, -20, 140, -3569, -3469, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("这里就是武陵吗？感觉气氛很特别啊？建筑风格也是……感觉很好玩？是吧？", 41, 2400005, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("嗯……看那里的高楼，好高哇……", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("哎呀，真的啊？这是什么建筑？好像是个很特殊的建筑，要不我们过去看看？", 41, 2400005, true, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;