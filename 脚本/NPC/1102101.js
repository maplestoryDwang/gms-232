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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;