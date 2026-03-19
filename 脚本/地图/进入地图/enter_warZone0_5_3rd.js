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
    cm.spawnMobLimit(2400020, 1, 300, 29, 100);
    cm.spawnMobLimit(2400020, 1, 300, 29, 100);
    cm.spawnMobLimit(2400020, 1, 400, 29, 100);
    cm.spawnMobLimit(2400020, 1, 400, 29, 100);
    cm.spawnMobLimit(2400020, 1, 500, -331, 100);
    cm.spawnMobLimit(2400020, 1, 500, -331, 100);
    cm.spawnMobLimit(2400020, 1, 600, 29, 100);
    cm.spawnMobLimit(2400020, 1, 600, 29, 100);
    cm.spawnMobLimit(2400020, 1, 700, -331, 100);
    cm.spawnMobLimit(2400020, 1, 700, -331, 100);
    cm.spawnMobLimit(2400020, 1, 800, 29, 100);
    cm.spawnMobLimit(2400020, 1, 800, 29, 100);
    cm.spawnMobLimit(2400020, 1, 900, -391, 100);
    cm.spawnMobLimit(2400020, 1, 900, -391, 100);
    cm.spawnMobLimit(2400020, 1, 1000, 29, 100);
    cm.spawnMobLimit(2400020, 1, 1000, 29, 100);
    cm.spawnMobLimit(2400020, 1, 1000, -691, 100);
    cm.spawnMobLimit(2400020, 1, 1000, -691, 100);
    cm.spawnMobLimit(2400020, 1, 1100, -391, 100);
    cm.spawnMobLimit(2400020, 1, 1100, -391, 100);
    cm.spawnMobLimit(2400020, 1, 1200, 29, 100);
    cm.spawnMobLimit(2400020, 1, 1200, 29, 100);
    cm.spawnMobLimit(2400020, 1, 1200, -691, 100);
    cm.spawnMobLimit(2400020, 1, 1200, -691, 100);
    cm.spawnMobLimit(2400020, 1, 1300, -391, 100);
    cm.spawnMobLimit(2400020, 1, 1300, -391, 100);
    cm.spawnMobLimit(2400020, 1, 1400, 29, 100);
    cm.spawnMobLimit(2400020, 1, 1400, 29, 100);
    cm.spawnMobLimit(2400020, 1, 1400, -691, 100);
    cm.spawnMobLimit(2400020, 1, 1400, -691, 100);
    cm.spawnMobLimit(2400020, 1, 1500, -391, 100);
    cm.spawnMobLimit(2400020, 1, 1500, -391, 100);
    cm.spawnMobLimit(2400020, 1, 1600, 29, 100);
    cm.spawnMobLimit(2400020, 1, 1600, 29, 100);
    cm.spawnMobLimit(2400020, 1, 1600, -691, 100);
    cm.spawnMobLimit(2400020, 1, 1600, -691, 100);
    cm.spawnMobLimit(2400020, 1, 1700, -331, 100);
    cm.spawnMobLimit(2400020, 1, 1700, -331, 100);
    cm.spawnMobLimit(2400020, 1, 1800, 29, 100);
    cm.spawnMobLimit(2400020, 1, 1800, 29, 100);
    cm.spawnMobLimit(2400020, 1, 1800, -691, 100);
    cm.spawnMobLimit(2400020, 1, 1800, -691, 100);
    cm.spawnMobLimit(2400020, 1, 1900, -331, 100);
    cm.spawnMobLimit(2400020, 1, 1900, -331, 100);
    cm.spawnMobLimit(2400020, 1, 2000, 29, 100);
    cm.spawnMobLimit(2400020, 1, 2000, 29, 100);
    cm.spawnMobLimit(2400020, 1, 2100, -307, 100);
    cm.spawnMobLimit(2400020, 1, 2100, -307, 100);
    cm.spawnMobLimit(2400020, 1, 2200, -272, 100);
    cm.spawnMobLimit(2400020, 1, 2200, -272, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
    cm.dispose();
  }
}