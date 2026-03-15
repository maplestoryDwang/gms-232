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
      cm.askAcceptDecline("这样啊，你已经准备好挑战森兰丸了吗？");
    } else if (status === V++) {
      cm.dispose();
      cm.warp(807300100, 0);
    }
  }
}