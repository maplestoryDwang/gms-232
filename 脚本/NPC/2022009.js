function action(f, W, U) {
  cm.sendNext("Let's go!");
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;