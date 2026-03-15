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
      cm.addNumberForQuestInfo(34127, 'count', 1);
      cm.removeAll(4036709);
      cm.sendNormalTalk("你搜集到了50个#t4036709:#。来，我把1个#i1712001:# #t1712001:#和1个#i2614029:# #t2614029:#送给你。搜集到的部件一定会对研究起到很大的帮助。", 0, 3003104, false, true);
      cm.gainItem(1712001, 1);
      cm.gainItem(2614029, 1);
    } else if (status === v++) {
      cm.dispose();
    }
  }
}