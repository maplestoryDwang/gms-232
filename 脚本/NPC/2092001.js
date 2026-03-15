var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
    }
    status--;
  }
  if (status == 0) {
    cm.askYesNo("那我送你过去吧?");
  } else if (status == 1) {
    cm.warp(925110001);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;