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
      cm.sendOk("真的很漫长……");
    } else {
      cm.sendOk("真想快点打赢这场战争，好回家看看我的孩子们。");
    }
  } else {
    cm.dispose();
  }
}