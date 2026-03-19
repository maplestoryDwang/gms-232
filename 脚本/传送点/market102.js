function enter() {
  cm.saveLocation("FREE_MARKET");
  cm.warp(910000000, 16);
  cm.effect_Text(["#fn黑体##fs18# 自由市场"], [100, 2000, 6, -50, -50, 1, 4, 0, 0, 0]);
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else if (status === R++) {
    cm.playerMessage(-1, "");
    cm.dispose();
  }
}