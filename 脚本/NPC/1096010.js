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
      if (cm.isQuestActive(2566) && !cm.haveItem(4032985, 1)) {
        cm.gainItem(4032985, 1);
        cm.sendNext("发现了点火装置，拿回去交给司徒诺吧。");
      }
    } else if (status === V++) {
      cm.warp(3000200, 0);
      cm.dispose();
    }
  }
}