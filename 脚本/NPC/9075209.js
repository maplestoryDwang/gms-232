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
      cm.askYesNo("是否退出进化系统？", 0, 9075209);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("退出进化系统。", 0, 9075209, false, true);
      } else if (status === V++) {
        cm.endQuestClock(1, 1824);
        cm.dispose();
        cm.warp(957000000, 0, false);
      }
    }
  }
}