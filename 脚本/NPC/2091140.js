function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (status == 0 && f == 0) {
      cm.dispose();
      return;
    } else if (status == 2 && f == 0) {
      cm.sendNext("。。。");
      cm.dispose();
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      cm.askYesNo('确定退出副本吗？');
    } else if (status == 1) {
      cm.warp(706041003);
      cm.dispose();
    }
  }
}
var status = -1;