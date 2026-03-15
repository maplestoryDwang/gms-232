function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  cm.sendNext("Hi, I'm Tia.");
  cm.dispose();
}
var status = -1;