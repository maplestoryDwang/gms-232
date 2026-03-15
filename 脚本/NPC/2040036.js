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
    cm.sendNormalTalk("我来说明一下第一关。这里有吞食次元裂缝的次元玩具黑鼠和次元玩具白鼠。搜集被玩具黑鼠和玩具白鼠偷走的20张通行证，然后和我说话，我就会为你们打开通往下一关的路。请加油吧！", 0, 2040036, false, true);
    cm.dispose();
  }
}