var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == -1) {
      cm.dispose();
    } else {
      if (status == 0) {
        cm.askMenu("离婚可能是一件很鲁莽的决定，你可能决定了，我也不多说什么了。#b\r\n#L0# 我想离开这里。");
      } else if (status == 1) {
        cm.warp(700000000);
        cm.dispose();
      }
    }
  }
}