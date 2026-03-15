var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.sendNext("你终于来了。拥有契约者资格的人……");
  } else {
    if (status == 1) {
      cm.sendNextPrev("执行契约吧……");
    } else if (status == 2) {
      cm.warp(900090101);
      cm.dispose();
    }
  }
}