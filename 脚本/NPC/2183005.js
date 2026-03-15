function start() {
  cm.askYesNoS("So, you really want to leave?");
}
function action(f, W, U) {
  if (f == 1) {
    cm.warp(262010000, 0);
  }
  cm.dispose();
}
var status = -1;