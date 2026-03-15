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
    cm.sendNormalTalk_Bottom("欢迎来到怪物公园！\r\n我是站在那边的休彼德蔓的妹妹，我叫#b#p9071006##k，\r\n请多多关照！", 36, 9071006, false, false);
  } else {
    cm.dispose();
  }
}