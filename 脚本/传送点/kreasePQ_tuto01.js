function enter() {
  if (cm.getNumberFromQuestInfo(31069, 't1') == 0) {
    cm.setNumberForQuestInfo(31069, 't1', 1);
    cm.addPopupSay(2170016, 2000, "不是这一条路吧？需要往上走！", '', 0);
  }
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else if (status === R++) {
    cm.playerMessage(-1, "");
    cm.dispose();
  }
}