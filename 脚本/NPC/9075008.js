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
      cm.sendNormalTalk("#h0#，紧急情况。请停下所有正在执行的任务，立刻回到反抗者秘密广场。", 4, 2151003, false, true);
    } else if (status === V++) {
      cm.forceStartQuest(1845, '');
      cm.dispose();
    }
  }
}