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
    if (cm.isQuestActive(3926)) {
      if (cm.getNumberFromQuestInfo(3926, '2') == 0) {
        cm.setNumberForQuestInfo(3926, '2', 1);
        cm.gainItem(4031579, -1);
        if (cm.addNumberForQuestInfo(3926, 'total', 1) == 4) {
          cm.setQuestCustomData(3926, 3333);
        }
        cm.sendOkS("留下了宝物。去下一家吧。");
      } else {
        cm.sendOkS("已经在这一家留下宝物了。去下一家吧。");
      }
    }
    cm.dispose();
  }
}