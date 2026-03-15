function start() {
  cm.askYesNo("要通过#p1002105#移动到万神殿吗？");
}
function action(f, W, U) {
  if (f == 1) {
    cm.warp(400000001, 1);
  }
  cm.dispose();
}
var status = -1;