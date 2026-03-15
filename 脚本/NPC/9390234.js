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
    cm.askMenu("结束之后，要返回#m865020300#吗？\r\n#b\r\n#L0#返回#m865020300#。#l", 0, 9390234);
  } else {
    cm.warp(865020300, 1);
    cm.dispose();
  }
}