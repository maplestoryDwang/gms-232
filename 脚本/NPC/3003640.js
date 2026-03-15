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
      cm.askMenu("坐着小型飞船就能前往你想去的甲板。\r\n要去哪儿呢？\r\n\r\n#b#L0##m993060038##k#l\r\n#b#L1##m450009050##k#l\r\n\r\n#L2#不使用小型飞船。#l", 24, 3003640);
    } else if (status === V++) {
      if (U == 0) {
        cm.dispose();
        cm.warp(993060038, 1, false);
      } else {
        cm.dispose();
        cm.warp(450009050, 11, false);
      }
    }
  }
}