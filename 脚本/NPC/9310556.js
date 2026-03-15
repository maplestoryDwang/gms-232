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
      if (cm.getNowTimeString(3) === cm.getStringFromQuestInfo(62152, "lastDay")) {
        cm.sendNormalTalk_Bottom("你今天已经占卜过了，请你明天再来吧。", 37, 9310556, false, false);
        cm.dispose();
      } else {
        cm.askYesNo_Bottom("你是来占卜的吗？价格是1个\r\n#i4310177:##t4310177#，客人。", 37, 9310556);
      }
    } else if (status === V++) {
      if (cm.haveItem(4310177, 1)) {
        cm.addNumberForQuestInfo(62152, "cnt", 1);
        cm.setStringForQuestInfo(62152, "lastDay", cm.getNowTimeString(3));
        cm.gainItem(4310177, -1);
        cm.dispose();
        cm.warp(701100015, 3);
      } else {
        cm.sendNormalTalk_Bottom("客人，如果没钱，我是不能为你占卜的。请带钱来。", 37, 9310556, false, false);
        cm.dispose();
      }
    } else {
      cm.dispose();
    }
  }
}