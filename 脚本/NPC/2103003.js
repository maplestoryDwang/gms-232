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
    if (cm.isQuestActive(3929)) {
      if (cm.getNumberFromQuestInfo(3929, '1') == 0) {
        cm.setNumberForQuestInfo(3929, '1', 1);
        cm.gainItem(4031580, -1);
        if (cm.addNumberForQuestInfo(3929, "total", 1) == 4) {
          cm.setQuestCustomData(3929, 3333);
        }
        cm.sendOkS("留下了粮食。去下一家吧。");
      } else {
        cm.sendOkS("已经在这一家发过粮食了。去下一家吧。");
      }
    }
    cm.dispose();
  }
}