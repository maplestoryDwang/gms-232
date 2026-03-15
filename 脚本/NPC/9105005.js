function start() {
  cm.askYesNo("Would you like to return to the Lobby?");
}
function action(f, W, U) {
  if (f == 1) {
    cm.warp(889100100);
  }
  cm.dispose();
}