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
      if (cm.isQuestActive(20850)) {
        cm.sendNormalTalk("搜索进行得怎么样了？在这附近好像没有发现变身术士。我会继续监视这里，你快去别的地方搜素。", 0, 1102205, false, true);
      } else {
        cm.dispose();
        return;
      }
    } else if (status === V++) {
      cm.OnStartNavigation(130010120, 0, '', 20850);
      cm.dispose();
    }
  }
}