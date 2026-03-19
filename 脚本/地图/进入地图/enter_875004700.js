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
    cm.spawnMobLimit(9601657, 1, -400, 307, 10);
    cm.spawnMobLimit(9601657, 1, -250, 307, 10);
    cm.spawnMobLimit(9601668, 1, -100, 307, 10);
    cm.spawnMobLimit(9601668, 1, 50, 307, 10);
    cm.spawnMobLimit(9601681, 1, 2050, 307, 10);
    cm.addPopupSay(9401299, 3000, "#face0#大侠，他们刚才往仓库后面去了！", '', 0);
    cm.playerMessage(-1, "必须消灭掉区域内的所有怪物，才能移动到下一地区。");
    cm.playerMessage(5, "请消灭掉区域内的所有怪物。");
    cm.dispose();
  }
}