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
    if (cm.getQuestStatus(2757) == 1) {
      if (cm.haveItem(4033005)) {
        cm.sendNormalTalk("#b(已经有#t4033005#了。快去交给#p1032106#吧。)", 0, 1032116, false, false);
      } else {
        cm.gainItem(4033005, 1);
        cm.sendNormalTalk("#b(获得了#t4033005#)#k", 0, 1032116, false, true);
      }
      cm.dispose();
    } else {
      cm.dispose();
    }
  } else {
    cm.dispose();
  }
}