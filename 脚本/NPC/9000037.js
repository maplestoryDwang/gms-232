function start() {
  cm.askYesNo("Do you want to get out now?");
}
function action(f, W, U) {
  if (f == 1) {
    cm.warp(970030000, 0);
  }
  cm.dispose();
}
var status = -1;