var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(U, f, c) {
  if (status == 0 && U == 0) {
    cm.dispose();
    return;
  }
  if (U == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = c;
  var W = -1;
  if (status <= W++) {
    cm.dispose();
  } else if (status === W++) {
    cm.askYesNo("新版拍卖场正在施工之中。要进去看看吗？");
  } else {
    cm.enter拍卖();
    cm.dispose();
  }
}