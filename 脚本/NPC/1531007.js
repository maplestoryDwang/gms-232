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
      cm.askYesNo_Bottom("你说弄丢了装备？\r\n……你不会是因为它还是原型样本，就很随便待它吧？没办法了，我会给你发放武器和辅助武器，但也只有最基本的。", 36, 1531001);
    } else if (status === V++) {
      cm.dispose();
      cm.gainItem(1353200, 1);
      cm.gainItem(1262000, 1);
    }
  }
}