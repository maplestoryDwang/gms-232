function start() {
  cm.askYesNo("Do you want to really go out and abandon your duty?");
}
function action(f, W, U) {
  if (f == 1) {
    cm.warp(262010000, 0);
  }
  cm.dispose();
}