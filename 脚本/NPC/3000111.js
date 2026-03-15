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
    if (cm.getMap().getNumMonsters() > 0) {
      cm.playerMessage(-1, "必须消灭掉所有怪物，继续向神殿深处前进。");
      cm.playerMessage(5, "剩余怪物数量：" + cm.getMap().getNumMonsters() + '');
    } else {
      cm.warp(940011150, 0);
    }
    cm.dispose();
  } else {
    cm.dispose();
  }
}