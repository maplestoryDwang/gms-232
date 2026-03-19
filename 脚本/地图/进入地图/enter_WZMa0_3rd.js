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
    cm.killAllMobNoExp();
    if (cm.getMapId() == 400052500) {
      cm.spawnMobLimit(9300814, 1, 200, 29, 100);
      cm.spawnMobLimit(9300814, 1, 400, 29, 100);
      cm.spawnMobLimit(9300814, 1, 600, 29, 100);
      cm.spawnMobLimit(9300814, 1, 800, 29, 100);
      cm.spawnMobLimit(9300814, 1, 1000, 29, 100);
      cm.spawnMobLimit(9300814, 1, 1200, 29, 100);
      cm.spawnMobLimit(9300814, 1, 1400, 29, 100);
      cm.spawnMobLimit(9300814, 1, 1600, 29, 100);
      cm.spawnMobLimit(9300814, 1, 450, -211, 100);
      cm.spawnMobLimit(9300814, 1, 600, -211, 100);
      cm.spawnMobLimit(9300814, 1, 750, -211, 100);
      cm.spawnMobLimit(9300814, 1, 100, -511, 100);
      cm.spawnMobLimit(9300814, 1, 200, -511, 100);
      cm.spawnMobLimit(9300814, 1, 300, -511, 100);
      cm.spawnMobLimit(9300814, 1, 400, -511, 100);
      cm.spawnMobLimit(9300814, 1, 500, -511, 100);
      cm.spawnMobLimit(9300814, 1, 600, -511, 100);
      cm.spawnMobLimit(9300814, 1, 700, -511, 100);
      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
    }
    cm.dispose();
  }
}