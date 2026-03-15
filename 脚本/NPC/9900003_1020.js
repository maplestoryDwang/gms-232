var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 0 && status == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      text = "现在就要离开吗？";
      cm.askYesNo(text);
    } else if (status == 1) {
      cm.warp(910000000);
      cm.dispose();
    }
  }
}