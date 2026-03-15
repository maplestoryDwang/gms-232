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
    if (cm.getStringFromQuestInfo(31057, "kill") === "clear") {
      cm.updateInfoQuest(31057, "door=clear;kill=clear");
      cm.forceCompleteQuest(31059);
      cm.playerMessage(-1, "发现了通道.");
    } else {
      cm.playerMessage(-1, "还有敌人没有消灭干净.");
      cm.playerMessage(5, "还有敌人没有消灭干净.");
    }
    cm.dispose();
  }
}