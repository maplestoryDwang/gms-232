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
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/4");
    cm.spawnMobLimit(9402242, 1, 600, 132, 100);
    cm.spawnMobLimit(9402243, 1, 800, 132, 100);
    cm.spawnMobLimit(9402243, 1, 1000, 129, 100);
    cm.spawnMobLimit(9402242, 1, 1200, 125, 100);
    cm.spawnMobLimit(9402241, 1, 1400, 125, 100);
    cm.spawnMobLimit(9402242, 1, 1600, 132, 100);
    cm.spawnMobLimit(9402243, 1, 1800, 132, 100);
    cm.spawnMobLimit(9402242, 1, 2000, 132, 100);
    cm.spawnMobLimit(9402243, 1, 2200, 132, 100);
    cm.spawnMobLimit(9402242, 1, 325, -29, 100);
    cm.spawnMobLimit(9402243, 1, 530, -38, 100);
    cm.spawnMobLimit(9402242, 1, 740, -30, 100);
    cm.spawnMobLimit(9402241, 1, 830, 315, 100);
    cm.spawnMobLimit(9402242, 1, 1000, 299, 100);
    cm.spawnMobLimit(9402242, 1, 1200, 298, 100);
    cm.spawnMobLimit(9402241, 1, 1400, 314, 100);
    cm.spawnMobLimit(9402242, 1, 1600, 310, 100);
    cm.spawnMobLimit(9402243, 1, 1800, 305, 100);
    cm.spawnMobLimit(9402242, 1, -251, 23, 100);
    cm.spawnMobLimit(9402241, 1, 137, -29, 100);
    cm.spawnMobLimit(9402243, 1, -22, -25, 100);
    cm.spawnMobLimit(9402242, 1, -881, 402, 100);
    cm.spawnMobLimit(9402241, 1, -550, 131, 100);
    cm.spawnMobLimit(9402242, 1, -723, 131, 100);
    cm.spawnMobLimit(9402242, 1, -537, 309, 100);
    cm.spawnMobLimit(9402243, 1, -320, 299, 100);
    cm.spawnMobLimit(9402242, 1, -296, 402, 100);
    cm.spawnMobLimit(9402243, 1, -62, 402, 100);
    cm.spawnMobLimit(9402242, 1, 280, 402, 100);
    cm.spawnMobLimit(9402241, 1, 1483, 128, 100);
    cm.spawnMobLimit(9402242, 1, 1345, 124, 100);
    cm.spawnMobLimit(9402242, 1, 1244, 125, 100);
    cm.spawnMobLimit(9402243, 1, 2188, 132, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;