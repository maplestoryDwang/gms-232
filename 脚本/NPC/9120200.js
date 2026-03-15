function start() {
  cm.askYesNo("Here you are, right in front of the hideout！What? You want to return to #m801000000#?");
}
function action(f, W, U) {
  if (f == 0) {
    cm.sendOk("If you want to return to #m801000000#, then talk to me");
  } else {
    cm.warp(801000000, 0);
  }
  cm.dispose();
}
var status = -1;