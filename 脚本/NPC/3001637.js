var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if ('h2' === cm.getStringFromQuestInfo(39597, '37')) {
        cm.playerMessage(5, "这一支蜡烛已经点燃了，去寻找其它蜡烛吧。");
        cm.getTopMsgFont("这一支蜡烛已经点燃了，去寻找其它蜡烛吧。", 3, 20, 20, 0, 0);
      } else {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, false);
        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
        cm.setInGameDirectionMode(false, true, false);
        cm.setStringForQuestInfo(39597, '37', 'h2');
        var w = cm.addNumberForQuestInfo(39597, "count1", 1);
        if (w == 1) {
          cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 2);
          cm.playerMessage(5, "已点燃第一支蜡烛，去寻找其它蜡烛吧。");
          cm.getTopMsgFont("已点燃第一支蜡烛，去寻找其它蜡烛吧。", 3, 20, 20, 0, 0);
        } else {
          cm.fieldEffect_InsertCanvas(1, 100, 0, 0, 0, 1300, 2);
          cm.playerMessage(5, "已点燃第二支蜡烛，去寻找其它蜡烛吧。");
          cm.getTopMsgFont("已点燃第二支蜡烛，去寻找其它蜡烛吧。", 3, 20, 20, 0, 0);
        }
      }
      cm.dispose();
    }
  }
}