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
    cm.askAcceptDecline("正巧，驶向明珠港的船已经准备好啦。你要是愿意的话，现在就可以乘上去。", 0, 9390217);
  } else {
    cm.warp(104000000, 5);
    cm.dispose();
  }
}