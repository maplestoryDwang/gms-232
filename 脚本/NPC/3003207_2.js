function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (status >= 0 && f == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      cm.askYesNo_Bottom("击退了路西德。现在要返回吗？", 56, 0);
    } else if (status == 1) {
      cm.warp(450004000);
      cm.dispose();
    }
  }
}
var status = -1;