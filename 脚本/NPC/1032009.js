var status = -1;
function start() {
  action(1, 0, 0);
}
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  if (f == 0) {
    cm.sendOk("你会到达你的目的地的时刻。去吧，和其他人说话，在你知道它之前，你已经在那里了.");
    cm.dispose();
    return;
  }
  if (status == 0) {
    cm.askYesNo("你想离开候车室吗？你可以，但票是不退还的。你确定你还想离开这个房间吗?");
  } else if (status == 1) {
    cm.warp(104020110, 0);
    cm.dispose();
  }
}