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
      cm.setPartner(1, 2155104, 80001702, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(3);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.eventSKill(0);
        cm.setInGameDirectionMode(false, true, false);
        cm.sendNormalTalk_Bottom("没错…在这里要像这样爬上去。\r\n嗯…尽头处好像有什么东西来着。\r\n我们先爬上去看看吧。你应该不会有恐高症吧？", 37, 2155104, false, false);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}