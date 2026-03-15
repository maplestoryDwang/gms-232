function action(f, W, U) {
  var V = cm.getSavedLocation("MULUNG_TC");
  if (V < 0) {
    V = 230000000;
  }
  cm.clearSavedLocation("MULUNG_TC");
  cm.warp(V, "unityPortal2");
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;