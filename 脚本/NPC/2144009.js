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
      if (cm.isQuestFinished(31177)) {
        cm.askMenu("约定就是约定。只要你愿意，我就能让你变身成#r龙#k。怎么样？\r\n\r\n#L1##b让我变身成龙吧。#l");
      } else {
        cm.sendOk("现在……还需要再休息一会儿。请你击退怪物直到我完全恢复为止。");
        cm.dispose();
      }
    } else if (status === V++) {
      cm.dispose();
      cm.warp(200090520, 0);
      cm.useItem(2210070);
    }
  }
}