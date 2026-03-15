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
    cm.sendNormalTalk("喜鹊喜鹊春节活动已经结束，尤茨已经没法再玩了！\r\n是不是觉得尤茨很好玩？\r\n下次再一起玩咯！", 0, 9001157, false, false);
  } else {
    cm.dispose();
  }
}