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
    cm.sendNormalTalk(" 欢迎来到第四关。这里有非常强的怪物，那就是#b#o9300010##k。打倒他之后，收集4个次元的通行证。", 0, 2040042, false, true);
    cm.dispose();
  }
}