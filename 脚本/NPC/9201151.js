function action(f, W, U) {

  cm.scheduleWarpTask(1 * 1 * 25, cm.getMap(104000000))

  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;