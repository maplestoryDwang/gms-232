var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 0) {
    cm.dispose();
  } else {
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      cm.sendNext("See you again~!");
    } else if (status == 1) {
      cm.warp(220000000);
      cm.removeAll(4001106);
      cm.dispose();
    }
  }
}