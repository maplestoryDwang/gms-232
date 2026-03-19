function enter() {
  if (cm.isQuestActive(59063)) {
    cm.warp(866000230, 0, false);
  } else if (cm.isQuestFinished(59063)) {
    cm.warp(104000000, 0, false);
  } else {
    cm.playerMessage(-1, "这个港口好像正在维修。寻找其他的路吧？");
    cm.playerMessage(5, "这个港口好像正在维修。再找找其他的路吧？");
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