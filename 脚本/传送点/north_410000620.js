function enter() {
  if (cm.getQuestStatus(39910) > 0 && cm.getQuestStatus(39913) == 0) {
    cm.warp(410000770, 2);
  } else {
    cm.sendOkS_Bottom("现在不是出城的时候。");
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