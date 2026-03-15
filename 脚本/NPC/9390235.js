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
  } else if (status === V++) {
    if (cm.isQuestFinished(17641) && cm.getQuestStatus(17648) == 0) {
      cm.sendNormalTalk("准备好了吗？我们出发吧！", 0, 9390235, false, true);
    } else {
      cm.sendNormalTalk("现在不是乘船的时候。", 0, 9390235, false, true);
      cm.dispose();
    }
  } else {
    cm.warp(865010001, 0);
    cm.dispose();
  }
}