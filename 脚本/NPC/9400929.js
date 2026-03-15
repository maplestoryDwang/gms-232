var status = -1;
var selectionLog = [];
var npcs = [9400920, 9400921, 9401160];
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
      var w = cm.getNumberFromQuestInfo(500773, "manager");
      cm.addPopupSay(npcs[w], 5000, "#face0# 新的家是什么样子的呢？只要一想如何装扮新的家，1分钟很快就过去了呢！", '');
      cm.dispose();
    }
  }
}