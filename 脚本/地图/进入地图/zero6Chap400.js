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
      cm.npc_ChangeController(2470021, "oid=27653", 1723, 102, 75, 1673, 1773, 0, false, 0, false);
      cm.npc_ChangeController(2470020, "oid=27654", 1788, 102, 75, 1738, 1838, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("感谢你停止了玩具城的时间。我们在这里需要做的事情都做完了。", 33, 2470000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("能长时间在这个地方亲自做女神所做的事情，我很开心。我期待以后能和两位一起经历更多不同的东西。", 33, 2470001, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("好。我们会尽全力不辜负你的期待的。", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("恩。现在我们走吧。", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("那，请多指教。", 33, 2470019, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Party1/Clear", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(327090410, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;