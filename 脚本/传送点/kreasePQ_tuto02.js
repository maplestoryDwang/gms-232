function enter() {
  if (cm.getNumberFromQuestInfo(31069, 't2') == 0) {
    cm.setNumberForQuestInfo(31069, 't2', 1);
    cm.addPopupSay(2170016, 2000, "闪耀的树丛啊！\r\n按下SPACE键，应该就能进去了吧？", '', 0);
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