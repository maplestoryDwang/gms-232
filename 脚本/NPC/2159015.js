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
      cm.sendNormalTalk("哎呀，被发现了！哇……你好像很会找嘛。真厉害！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0#\r\n3exp", 0, 2159015, false, true);
    } else if (status === V++) {
      if (cm.getNumberFromQuestInfo(23007, 'exp3') == 0) {
        cm.gainExp(3);
        cm.setNumberForQuestInfo(23007, 'exp3', 1);
      }
      cm.dispose();
    }
  }
}