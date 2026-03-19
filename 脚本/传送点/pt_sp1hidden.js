function enter() {
  if (!cm.isQuestActive(33036) || cm.getNumberFromQuestInfo(33046, 'ok') > 0 || cm.isQuestFinished(32753)) {
    cm.sendOkS_Bottom("这里没什么好去的了。");
  } else {
    cm.warp(330002130, 0, true);
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
    cm.playerMessage(-1, "");
    cm.dispose();
  }
}