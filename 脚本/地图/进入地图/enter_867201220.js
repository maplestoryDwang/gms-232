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
    cm.playerMessage(-1, "消灭怪物并进入森林深处吧");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
    cm.spawnMobLimit(9402242, 1, 600, 331, 100);
    cm.spawnMobLimit(9402243, 1, 800, 331, 100);
    cm.spawnMobLimit(9402242, 1, 1000, 331, 100);
    cm.spawnMobLimit(9402242, 1, 1200, 331, 100);
    cm.spawnMobLimit(9402243, 1, 1300, 331, 100);
    cm.spawnMobLimit(9402243, 1, 750, 250, 100);
    cm.spawnMobLimit(9402241, 1, 750, 80, 100);
    cm.spawnMobLimit(9402242, 1, 950, 80, 100);
    cm.spawnMobLimit(9402243, 1, 1150, 331, 100);
    cm.spawnMobLimit(9402242, 1, 766, 252, 100);
    cm.spawnMobLimit(9402241, 1, -364, 331, 100);
    cm.spawnMobLimit(9402241, 1, 71, 331, 100);
    cm.spawnMobLimit(9402241, 1, -173, 331, 100);
    cm.spawnMobLimit(9402242, 1, 71, 331, 100);
    cm.spawnMobLimit(9402242, 1, 534, 331, 100);
    cm.spawnMobLimit(9402242, 1, 101, -86, 100);
    cm.spawnMobLimit(9402241, 1, -61, -52, 100);
    cm.spawnMobLimit(9402242, 1, 54, -82, 100);
    cm.spawnMobLimit(9402243, 1, 620, -66, 100);
    cm.spawnMobLimit(9402242, 1, 275, 175, 100);
    cm.spawnMobLimit(9402243, 1, 685, 80, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;