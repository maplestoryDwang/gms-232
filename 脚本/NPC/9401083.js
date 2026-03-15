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
    if (cm.isQuestFinished(64932)) {
      cm.sendNormalTalk_Bottom("虽然我没能在拯救杰斯这件事上帮到忙，但我会努力学习，一定要有助于杰斯和匹比的新事业！", 36, 9401083, 0, 0);
    } else {
      cm.sendNormalTalk_Bottom("为迎接新人生，绝不能怠于学习！", 36, 9401083, 0, 1);
    }
  } else {
    cm.dispose();
  }
}