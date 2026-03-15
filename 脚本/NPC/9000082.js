function start() {
  if (cm.getMapId() == 950101100) {
    cm.warp(950100000, 0);
    cm.dispose();
    return;
  }
  if (cm.getMapId() == 809061100) {
    cm.warp(809060000, 0);
    cm.dispose();
    return;
  }
  cm.askYesNo("If you leave now, you'll have to start over. Are you sure you want to leave?");
}
function action(f, W, U) {
  if (f == 1) {
    cm.warp(cm.getMapId() / 10000 == 80906 ? 809061100 : 950101100);
  }
  cm.dispose();
}
var status = -1;