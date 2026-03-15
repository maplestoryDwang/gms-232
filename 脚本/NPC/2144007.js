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
      if (!cm.isQuestActive(31173) || cm.haveItem(4033081, 1)) {
        cm.dispose();
        return;
      }
      cm.gainItem(4033081, 1);
      cm.sendNext("蛋好像没事。请好好照看，不要让蛋受伤。", 2144006);
      cm.forceStartQuest(31184, 1);
    } else {
      cm.dispose();
    }
  }
}