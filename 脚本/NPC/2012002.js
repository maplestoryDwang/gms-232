function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  if (f == 0) {
    cm.sendOk("你马上就能到达目的地。去和其他人谈谈，在你知道之前，你已经到了。");
    cm.dispose();
    return;
  }
  if (status == 0) {
    cm.askYesNo("你想离开候车室吗？你可以，但票不退。你确定你还想离开这个房间吗？");
  } else if (status == 1) {
    cm.warp(200000111, 0);
    cm.dispose();
  }
}