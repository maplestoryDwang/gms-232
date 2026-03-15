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
      cm.addNumberForQuestInfo(34775, "count", 1);
      cm.sendNormalTalk("感谢你的努力工作。给，这是你的报酬，2个#i1712006:# #t1712006:#和1个#i2614029:# #t2614029:#。", 0, 3003530, false, true);
      cm.gainItem(1712006, 2);
      cm.gainItem(2614029, 1);
      cm.removeAll(4036400);
    } else if (status === v++) {
      cm.dispose();
    }
  }
}