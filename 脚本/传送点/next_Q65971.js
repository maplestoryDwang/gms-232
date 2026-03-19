function enter() {
  if (cm.isQuestActive(65971) && cm.getMap().getNumMonsters() > 0) {
    cm.dispose();
    cm.getTopMsgFont("需消灭挡在前方的所有敌人，进行移动。", 3, 20, 20, 0, 0);
  } else {
    cm.dispose();
    cm.warp(875003031, 0, false);
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
  } else {
    if (status === R++) {}
  }
}