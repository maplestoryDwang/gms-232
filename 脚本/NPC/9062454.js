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
    cm.sendNormalTalk("虽然我现在还是人类的模样，但随着时间流逝，我会再次艾尔达之流动中的……\r\n所以在变回艾尔达之前，我想好好看看这个世界，好像享受这个世界！", 4, 9062454, false, false);
  } else {
    cm.dispose();
  }
}