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
      cm.askYesNo("你现在出去，要是再来挑战任务，还要从第一关开始。你想出去吗？", 0, 2040047);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(910002000, 0, false);
    }
  }
}