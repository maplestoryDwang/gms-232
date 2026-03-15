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
  } else {
    if (status === V++) {
      if (cm.isQuestFinished(24008) && !cm.isQuestFinished(24010)) {
        cm.forceCompleteQuest(24010);
      }
      cm.askYesNo("要去和`伟大的精灵`见面吗？\r\n#r(接受时自动移动到相关地图)#k");
    } else if (status === V++) {
      cm.warp(910150100, 0);
      cm.dispose();
    }
  }
}