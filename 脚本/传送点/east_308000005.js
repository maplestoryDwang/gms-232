function enter() {
  cm.openScriptNpc();
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
    if (cm.isQuestActive(37805)) {
      cm.warp(308090005, 0, true);
      cm.dispose();
    } else {
      cm.sendNormalTalk_Bottom("现在还无法移动。", 56, 0, false, true, 1);
      cm.dispose();
    }
  }
}