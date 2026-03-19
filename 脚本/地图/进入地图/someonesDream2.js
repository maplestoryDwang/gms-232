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
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b(影像突然中断了。好像受到了其他人的妨碍……！)#k", 17, 1104300, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("可恶的鼠辈……到此为止了。竟敢窥探主人的记忆。绝不可原谅！", 1, 1104300, true, true);
        } else if (status === V++) {
          cm.eventSKill(0);
          cm.setInGameDirectionMode(false, true, false);
          cm.spawnMobLimit(9100043, 1, 1289, -25, 1);
          cm.dispose();
        }
      }
    }
  }
}