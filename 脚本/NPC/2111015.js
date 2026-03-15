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
      if (!cm.isQuestActive(3314)) {
        cm.dispose();
        return;
      } else {
        cm.sendNormalTalk("书桌上放着几个小小的秘药。拿一个给他吧……", 0, 2111015, false, false);
        if (!cm.haveItem(2438888)) {
          cm.gainItem(2438888, 1);
        }
      }
      cm.dispose();
    }
  }
}