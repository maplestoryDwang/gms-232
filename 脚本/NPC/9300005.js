function action(f, W, U) {
  cm.warp(cm.getSavedLocation("AMORIA"));
  cm.clearSavedLocation('AMORIA');
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;