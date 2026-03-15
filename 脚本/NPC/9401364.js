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
    if (cm.getQuestStatus(65968) == 1 && cm.getMonsterCount(cm.getMapId()) > 0) {
      cm.dispose();
      cm.playerMessage(-1, "请消灭怪物。");
    } else {
      cm.dispose();
      cm.warp(875003044, 0, false);
    }
  } else {
    cm.dispose();
  }
}