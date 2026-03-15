function start() {
  cm.askYesNo("你想去冰雪之岛#b里恩#k吗?");
}
function action(f, W, U) {
  if (f == 0) {
    cm.sendOk("还有事情没有办完？等事情处理好在来找我吧!");
  } else {
    cm.warp(140020300, 0, false);
    // cm.scheduleWarpTask(30, 140020300, 0);
  }
  cm.dispose();
}
var status = -1;