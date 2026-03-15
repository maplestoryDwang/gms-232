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
    cm.askYesNo("Would you like to head to Orbis?");
  } else if (status == 1) {
    cm.warp(200000000);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;