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
      cm.askMenu("坐着小型飞船就能前往你想去的甲板。\r\n要去哪儿呢？\r\n\r\n#b#L0##m993060045##k#l\r\n\r\n#L1#不使用小型飞船。#l", 24, 3003643);
    } else if (status === V++) {
      if (U == 0) {
        cm.dispose();
        cm.warp(993060045, 1, false);
      } else {
        cm.dispose();
      }
    }
  }
}