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
    if (cm.isQuestFinished(30458)) {
      cm.sendNormalTalk("感谢你为童话村所做的一切。", 4, 2074018, false, false);
    } else {
      cm.sendNormalTalk('请救救童话村吧。', 4, 2074018, false, false);
    }
  } else {
    cm.dispose();
  }
}