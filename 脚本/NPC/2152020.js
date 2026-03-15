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
      if (cm.isQuestActive(23938)) {
        cm.forceCompleteQuest(23938);
        cm.playerMessage(5, "神秘人消失了");
        cm.hideNpc(2152020);
        cm.warp(cm.getMapId(), 0);
        cm.dispose();
        return;
      } else {
        cm.playerMessage(-1, "一个神秘的人影");
        cm.dispose();
      }
    }
  }
}