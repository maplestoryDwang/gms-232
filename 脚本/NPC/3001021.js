var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status >= 1 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.askMenu("#e<首领 - 暴君>#n\r\n确定要结束挑战，离开这里吗？\r\n#L2##b是的,现在就出去#l");
  } else {
    if (status == 1) {
      if (U == 2) {
        cm.warp(401060000, 0);
      }
      cm.dispose();
    } else if (f == 0) {
      cm.dispose();
    }
  }
}