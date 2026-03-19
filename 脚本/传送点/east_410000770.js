function enter() {
  if (cm.getQuestStatus(39911) > 0 && cm.getQuestStatus(39913) == 0) {
    if (cm.getNumberFromQuestInfo(39911, "clear") == 1) {
      cm.warp(993150071, 0, false);
    } else {
      cm.openNpc("荣耀_被选中之人_劫营");
    }
  } else {
    cm.sendOkS_Bottom("现在还不是出发的时机。");
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
    cm.playerMessage(-1, '');
    cm.dispose();
  }
}