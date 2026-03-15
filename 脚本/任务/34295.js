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
      cm.addNumberForQuestInfo(34298, 'count', 1);
      cm.sendNormalTalk("委托已经完成好了吗？真是厉害！我把2个#i1712005:# #t1712005:#和1个#i2614029:# #t2614029:#给你。", 0, 3003432, false, true);
      cm.gainItem(1712006, 2);
      cm.gainItem(2614029, 1);
    } else if (status === v++) {
      cm.dispose();
    }
  }
}