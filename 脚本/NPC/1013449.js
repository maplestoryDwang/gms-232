var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(x, D, b) {
  if (status == 0 && x == 0) {
    cm.dispose();
    return;
  }
  if (x == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = b;
  var J = -1;
  if (status <= J++) {
    cm.dispose();
  } else if (status === J++) {
    cm.sendOk("不知道什么用途的遗物。");
  } else {
    cm.dispose();
  }
}