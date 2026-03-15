var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
    cm.forceStartQuest(34486, "freed");
    cm.addNumberForQuestInfo(34474, 'fin', 1);
    cm.setNumberForQuestInfo(34474, 'type', 1);
    cm.dispose();
    cm.warp(940200415, 1, false);
  }
}