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
    cm.askYesNo("要离开这里吗？还没完全清理干净这个时空裂缝……");
  } else {
    cm.dispose();
    cm.warp(cm.getNumberFromQuestInfo(500798, 'map'), "gloryMission");
  }
}