var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f != 1) {
    cm.dispose();
    return;
  }
  status++;
  if (status == 0) {
    cm.dispose();
    cm.openNpc(9310074);
  }
}