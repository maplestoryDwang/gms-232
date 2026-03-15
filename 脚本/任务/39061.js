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
      cm.addNumberForQuestInfo(34127, "count", 1);
      cm.sendNormalTalk("来，我送你1个#i1712001:# #t1712001:#和1个#i2614029:# #t2614029:#。在你的帮助下，我们一定能早日查明异空间的真相。", 0, 3003104, false, true);
      cm.gainItem(1712001, 1);
      cm.gainItem(2614029, 1);
    } else if (status === v++) {
      cm.dispose();
    }
  }
}