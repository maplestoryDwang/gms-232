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
    cm.sendNormalTalk("看来最近也有很多人进行供养，庄严华丽的佛龛展示了少林寺的气魄。", 2, 9310585, false, true);
    cm.setNumberForQuestInfo(62004, "check1", 1);
  } else {
    cm.dispose();
  }
}