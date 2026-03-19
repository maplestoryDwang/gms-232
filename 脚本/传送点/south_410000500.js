function enter() {
  if (cm.isQuestActive(39813)) {
    cm.warp(993141014, 0, false);
  } else {
    cm.warp(410000760, 1, false);
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
    cm.playerMessage(-1, '');
    cm.dispose();
  }
}