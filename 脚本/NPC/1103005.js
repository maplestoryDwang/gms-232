function action(f, W, U) {
  if (cm.getPlayer().getLevel() >= 10) {
    cm.warp(130000000, 0);
  } else {
    cm.warp(130030000, 0);
  }
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;