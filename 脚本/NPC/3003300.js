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
      if (cm.isQuestFinished(34451)) {
        cm.warp(450005010, 0);
      } else if (cm.getQuestStatus(34450) > 0) {
        cm.warp(940200200, 0);
      } else {
        cm.playerMessage(-1, "还没解决拉克兰的噩梦，暂时无法前进。");
        cm.playerMessage(5, "还没解决拉克兰的噩梦，暂时无法前进。");
      }
      cm.dispose();
    }
  }
}