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
      cm.addNumberForQuestInfo(40514, 'count', 1);
      cm.setNumberForQuestInfo(40514, '20', 1);
      cm.sendNormalTalk("要看我的手腕？……那你看吧。", 32, 2460020, false, true);
    } else if (status === V++) {
      cm.playerMessage(5, "曹宇的手腕很干净。没有蜘蛛纹身。");
      cm.dispose();
    }
  }
}