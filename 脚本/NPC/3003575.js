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
    if (cm.isQuestFinished(35814)) {
      cm.sendOk("真不敢相信战斗结束了，就像做梦一样。");
    } else {
      cm.sendOk("有这么多人齐心协力，我们一定会胜利的。");
    }
  } else {
    cm.dispose();
  }
}