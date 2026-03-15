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
    if (cm.haveItem(1003134, 1) || cm.isQuestFinished(23947)) {
      cm.warp(310050000, 1, false);
    } else {
      cm.getTopMsgFont("只有黑色之翼的成员才能进入！", 3, 20, 4, 0, 0);
    }
    cm.dispose();
  }
}