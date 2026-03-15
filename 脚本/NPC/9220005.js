function start() {
  cm.askYesNo("Do you want to go to the Extra Frosty Snow Zone ?");
}
function action(f, W, U) {
  if (f > 0) {
    cm.warp(209080000, 0);
  }
  cm.dispose();
}
var status = -1;