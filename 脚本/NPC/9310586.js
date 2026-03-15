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
    cm.sendNormalTalk("香炉往外冒烟，似乎正在生气。香炉已经变成了妖怪。", 2, 9310586, false, true);
    cm.setNumberForQuestInfo(62004, 'check2', 1);
  } else {
    cm.dispose();
  }
}