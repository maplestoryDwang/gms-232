var status = -1;
function action(f, W, U) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  cm.warp(106030103, 0);
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;