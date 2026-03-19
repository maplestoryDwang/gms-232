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
    cm.setPartner(1, 9400644, 80011692, 0);
    cm.playerMessage(-1, "消灭怪物并进入森林深处吧");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/3");
    cm.spawnMobLimit(9402238, 1, -580, -30, 100);
    cm.spawnMobLimit(9402244, 1, 115, 151, 100);
    cm.spawnMobLimit(9402242, 1, 210, 151, 100);
    cm.spawnMobLimit(9402243, 1, 610, 151, 100);
    cm.spawnMobLimit(9402242, 1, 45, 328, 100);
    cm.spawnMobLimit(9402242, 1, 385, 335, 100);
    cm.spawnMobLimit(9402243, 1, 785, 326, 100);
    cm.spawnMobLimit(9402241, 1, -590, 404, 100);
    cm.spawnMobLimit(9402243, 1, -145, 404, 100);
    cm.spawnMobLimit(9402242, 1, 240, 404, 100);
    cm.spawnMobLimit(9402241, 1, 680, 404, 100);
    cm.spawnMobLimit(9402243, 1, 1336, 404, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;