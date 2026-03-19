function enter() {
  if (cm.getQuestStatus(65935) > 0) {
    cm.warp(875000011, 1, false);
  } else {
    cm.warp(875000001, 1, false);
  }
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else if (status === R++) {
    cm.dispose();
    cm.warp(875000000, 0, false);
  }
}