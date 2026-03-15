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
      cm.askYesNo("暂时只接收耐久度修理工作。\r\n想修复耐久度么？", 0, 2020000);
    } else if (status === V++) {
      cm.openUIWithOption(33, 2020000);
      cm.dispose();
    }
  }
}