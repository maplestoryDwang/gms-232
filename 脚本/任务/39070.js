var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      if (cm.getPlayer().isGM()) {
        cm.askYesNo("");
      } else {
        cm.forceStartQuest();
        cm.forceCompleteQuest();
        cm.dispose();
      }
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.forceCompleteQuest();
      cm.addNumberForQuestInfo(39016, "count", 1);
      cm.sendNormalTalk("舔舔！纽扣都回收好了吗？这是奖励！1个#i1712002:# #t1712002:#和1个#i2614029:# #t2614029:#！舔！", 0, 3003152, false, true);
      cm.gainItem(1712002, 1);
      cm.gainItem(2614029, 1);
      cm.removeAll(4036710);
    } else if (status === v++) {
      cm.dispose();
    }
  }
}