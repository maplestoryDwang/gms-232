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
    if (cm.isQuestFinished(34478)) {
      cm.warp(940204001, 0, true);
      cm.dispose();
    } else {
      cm.dispose();
      cm.sendNext("现在还不能离开。");
    }
  } else {
    cm.dispose();
  }
}