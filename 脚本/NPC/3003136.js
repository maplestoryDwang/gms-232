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
    if (cm.isQuestFinished(34114) && !cm.isQuestFinished(34115)) {
      cm.warp(450001370, 0);
      cm.dispose();
    } else {
      cm.warp(450001200, 2);
      cm.dispose();
    }
  }
}