function start() {
  cm.askYesNo("Would you like to go back?");
}
function action(f, W, U) {
  if (f == 1) {
    if (cm.getMapId() == 674030200) {
      cm.warp(674030100, 0);
    } else {
      var V = cm.getSavedLocation("CHRISTMAS");
      if (V > -1 && V != cm.getMapId()) {
        cm.warp(V, 0);
      } else {
        cm.warp(100000000, 0);
      }
    }
  }
  cm.dispose();
}
var status = -1;