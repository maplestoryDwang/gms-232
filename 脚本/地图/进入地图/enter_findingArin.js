var status = -1;
var selectionLog = [];
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
    cm.forceStartQuest(32644, '');
    cm.spawnMobLimit(8230047, 1, -800, 185, 100);
    cm.spawnMobLimit(8230047, 1, -600, 185, 100);
    cm.spawnMobLimit(8230047, 1, -488, 185, 100);
    cm.spawnMobLimit(8230047, 1, -400, 185, 100);
    cm.spawnMobLimit(8230047, 1, -300, 185, 100);
    cm.spawnMobLimit(8230047, 1, -200, 185, 100);
    cm.spawnMobLimit(8230047, 1, 0, 185, 100);
    cm.spawnMobLimit(8230047, 1, 50, 185, 100);
    cm.spawnMobLimit(8230047, 1, 100, 185, 100);
    cm.spawnMobLimit(8230047, 1, -743, -295, 100);
    cm.spawnMobLimit(8230047, 1, -643, -295, 100);
    cm.spawnMobLimit(8230047, 1, -286, -235, 100);
    cm.spawnMobLimit(8230047, 1, -200, -235, 100);
    cm.spawnMobLimit(8230047, 1, 387, -295, 100);
    cm.spawnMobLimit(8230047, 1, 200, -235, 100);
    cm.playerMessage(5, "消灭所有的乌曼，救出亚林。");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;