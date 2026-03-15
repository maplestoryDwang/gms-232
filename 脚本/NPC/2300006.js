function start() {
  cm.askYesNo("你想通过传送口移动到#m230050000#吗？");
}
function action(f, W, U) {
  if (f == 1) {
    cm.warp(230050000);
  }
  cm.dispose();
}
var status = -1;