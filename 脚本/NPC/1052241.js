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
      cm.sendNext("大事不好了，#b#ho##k！刚刚电视台来消息了，说是成员们的状态很奇怪。");
    } else if (status === V++) {
      cm.sendNext("在出发之前分明都好好的来着，不知道这到底是怎么回事……#b#ho##k，我们现在这就去直播出道舞台吧。");
    } else {
      cm.dispose();
      cm.warp(910310510, 0);
    }
  }
}