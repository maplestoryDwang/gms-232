function enter() {
  cm.openScriptNpc();
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
    if (cm.getMap().getNumMonsters() > 0) {
      cm.dispose();
      cm.playerMessage(-1, "还有敌人没有消灭。");
    } else {
      cm.dispose();
      cm.forceForfeitQuest(65947);
      cm.warp(875003034, 0, false);
    }
    cm.dispose();
  }
}