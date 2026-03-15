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
    if (cm.isQuestFinished(30434)) {
      cm.sendNormalTalk("终于有了圆满的结局。", 4, 2074009, false, true);
    } else {
      cm.sendNormalTalk("樵夫原来不是这么贪心的家伙啊。", 4, 2074009, false, true);
    }
  } else {
    cm.dispose();
  }
}