function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.getMapId() == 910000000) {
    cm.sendOk('您已经在自由市场了。');
    cm.dispose();
    return;
  }
  cm.warp(910000000, 0);
  cm.dispose();
}
var status = -1;