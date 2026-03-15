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
      cm.sendOk("我一定要好好干活，赚到更多的钱给娘……");
    } else {
      cm.sendOk("哼！我还要赚到更多的钱……");
    }
  } else {
    cm.dispose();
  }
}