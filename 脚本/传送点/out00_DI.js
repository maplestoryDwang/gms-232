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
  } else {
    if (status === R++) {
      cm.askYesNo("你想移动到次元传送口外面去吗？", 0, 9020010);
    } else if (status === R++) {
      cm.warp(940020000, 0, false);
      cm.sendNormalTalk("移动到次元传送口外面。", 0, 9020010, false, true);
      cm.dispose();
    }
  }
}