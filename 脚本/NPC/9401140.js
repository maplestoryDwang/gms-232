var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
9401140;
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.updateInfoQuest(64768, "dir=1;chk1=1;chk2=1");
    cm.dispose();
    cm.warp(867147014, 0, false);
  }
}