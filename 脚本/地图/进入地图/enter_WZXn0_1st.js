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
    if (cm.getMapId() == 400051800) {
      cm.spawnMobLimit(9300651, 1, 100, 29, 100);
      cm.spawnMobLimit(9300651, 1, 200, 29, 100);
      cm.spawnMobLimit(9300651, 1, 300, 29, 100);
      cm.spawnMobLimit(9300651, 1, 400, 29, 100);
      cm.spawnMobLimit(9300651, 1, 500, 29, 100);
      cm.spawnMobLimit(9300651, 1, 600, 29, 100);
      cm.spawnMobLimit(9300651, 1, 700, 29, 100);
      cm.spawnMobLimit(9300651, 1, 800, 29, 100);
      cm.spawnMobLimit(9300651, 1, 900, 29, 100);
      cm.spawnMobLimit(9300651, 1, 1000, 29, 100);
      cm.spawnMobLimit(9300651, 1, 1100, 29, 100);
      cm.spawnMobLimit(9300651, 1, 1200, 29, 100);
      cm.spawnMobLimit(9300651, 1, 1300, 29, 100);
      cm.spawnMobLimit(9300651, 1, 1400, 29, 100);
      cm.spawnMobLimit(9300651, 1, 1500, 29, 100);
      cm.spawnMobLimit(9300651, 1, 1600, 29, 100);
      cm.playerMessage(-1, "请消灭掉地图上的所有幽灵，然后通过传送口移动到下一张地图。");
      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
    }
    cm.dispose();
  }
}