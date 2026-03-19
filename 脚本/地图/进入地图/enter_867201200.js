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
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
    cm.spawnMobLimit(9402243, 1, 600, 331, 100);
    cm.spawnMobLimit(9402242, 1, 1000, 331, 100);
    cm.spawnMobLimit(9402243, 1, 1200, 331, 100);
    cm.spawnMobLimit(9402244, 1, 183, 331, 100);
    cm.spawnMobLimit(9402242, 1, 82, 331, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;