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
      cm.sendOk("我们故乡的子孙们这下有新的历史可以传唱了。");
    } else {
      cm.sendOk("我会竭尽全力战斗。");
    }
  } else {
    cm.dispose();
  }
}