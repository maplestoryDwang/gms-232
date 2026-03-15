function start() {
  var f = cm.getSavedLocation("EVENT");
  if (f > -1 && f != cm.getMapId()) {
    cm.warp(f, 0);
  } else {
    cm.warp(910000000, 0);
  }
  cm.dispose();
}
function action(f, W, U) {}
var status = -1;