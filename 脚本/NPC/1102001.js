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
      cm.askAcceptDecline("骑士等级考试全部结束了吗？要我把你送出去吗？", 0, 1102001);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(130020000, 12, false);
    }
  }
}