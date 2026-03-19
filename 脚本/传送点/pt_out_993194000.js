function enter() {
  cm.warp(cm.getNumberFromQuestInfo(100825, "rMap"));
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(j, q, T) {
  if (status == 0 && j == 0) {
    cm.dispose();
    return;
  }
  if (j == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = T;
  var y = -1;
  if (status <= y++) {
    cm.dispose();
  } else if (status === y++) {
    cm.playerMessage(-1, "");
    cm.dispose();
  }
}