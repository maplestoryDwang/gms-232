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
    if (!cm.isQuestFinished(41906)) {
      cm.sendOkS("好多的书啊，一定是戴尔罗的珍藏吧？");
    } else {
      if (cm.getStringFromQuestInfo(41927, "lastReadDate") != cm.getNowTimeString(3)) {
        cm.setNumberForQuestInfo(41927, "lastReadCount", 0);
        cm.setStringForQuestInfo(41927, "lastReadDate", cm.getNowTimeString(3));
      }
      cm.zeroReadBook(3 - cm.getNumberFromQuestInfo(41927, "lastReadCount"));
    }
    cm.dispose();
  }
}