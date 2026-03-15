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
    if (cm.getMonsterCount(cm.getMapId()) > 0) {
      cm.playerMessage(-1, "请找到钥匙。");
    } else {
      cm.Hidden_background('guide', 1, 1, 0, 0);
      cm.dispose();
      cm.warp(875003032, 0, true);
    }
  } else {
    cm.dispose();
  }
}