var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  } else {
    if (status >= 1 && f == 0) {
      cm.dispose();
      return;
    }
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.sendOk("你想训练你的宠物吗？\r\n即使没有宠物你也可以训练自己。");
    cm.dispose();
  }
}