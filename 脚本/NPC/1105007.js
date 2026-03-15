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
    cm.sendNormalTalk("我培养出了无数的飞侠……但是没想到会参加这种战斗。好的，相信联盟一定需要我们飞侠的力量。", 0, 1105007, false, false);
  } else {
    cm.dispose();
  }
}