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
    cm.spawnMobLimit(2400018, 1, 300, 29, 100);
    cm.spawnMobLimit(2400018, 1, 300, 29, 100);
    cm.spawnMobLimit(2400018, 1, 400, 29, 100);
    cm.spawnMobLimit(2400018, 1, 400, 29, 100);
    cm.spawnMobLimit(2400018, 1, 500, 29, 100);
    cm.spawnMobLimit(2400018, 1, 500, 29, 100);
    cm.spawnMobLimit(2400018, 1, 600, 29, 100);
    cm.spawnMobLimit(2400018, 1, 600, 29, 100);
    cm.spawnMobLimit(2400018, 1, 700, 29, 100);
    cm.spawnMobLimit(2400018, 1, 700, 29, 100);
    cm.spawnMobLimit(2400018, 1, 800, 29, 100);
    cm.spawnMobLimit(2400018, 1, 800, 29, 100);
    cm.spawnMobLimit(2400018, 1, 900, 29, 100);
    cm.spawnMobLimit(2400018, 1, 900, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1000, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1000, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1100, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1100, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1200, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1200, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1300, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1300, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1400, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1400, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1500, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1500, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1600, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1600, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1700, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1700, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1800, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1800, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1900, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1900, 29, 100);
    cm.spawnMobLimit(2400018, 1, 2000, 29, 100);
    cm.spawnMobLimit(2400018, 1, 2000, 29, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
    cm.dispose();
  }
}