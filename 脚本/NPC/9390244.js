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
    cm.askMenu("你要回凯梅尔兹吗？？\r\n#b\r\n#L0#前往村庄。#l", 0, 9390244);
  } else {
    cm.warp(865000000, 5);
    cm.dispose();
  }
}