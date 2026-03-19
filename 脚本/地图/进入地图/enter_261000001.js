var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    if (cm.isQuestActive(3311)) {
      cm.getTopMsgFont("可以点击，查看家中的物品。", 3, 20, 8, 0, 0);
    }
    cm.dispose();
  }
}