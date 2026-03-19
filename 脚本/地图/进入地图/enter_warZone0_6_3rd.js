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
    cm.spawnMobLimit(2400019, 1, 1300, 29, 100);
    cm.spawnMobLimit(2400019, 1, 1300, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1500, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1500, 29, 100);
    cm.spawnMobLimit(2400019, 1, 1700, 29, 100);
    cm.spawnMobLimit(2400019, 1, 1700, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1900, 29, 100);
    cm.spawnMobLimit(2400018, 1, 1900, 29, 100);
    cm.spawnMobLimit(2400019, 1, 2100, 29, 100);
    cm.spawnMobLimit(2400019, 1, 2100, 29, 100);
    cm.spawnMobLimit(2400018, 1, 2300, 29, 100);
    cm.spawnMobLimit(2400018, 1, 2300, 29, 100);
    cm.spawnMobLimit(2400019, 1, 2500, 29, 100);
    cm.spawnMobLimit(2400019, 1, 800, -282, 100);
    cm.spawnMobLimit(2400019, 1, 800, -282, 100);
    cm.spawnMobLimit(2400019, 1, 1000, -328, 100);
    cm.spawnMobLimit(2400019, 1, 1000, -328, 100);
    cm.spawnMobLimit(2400018, 1, 1200, -331, 100);
    cm.spawnMobLimit(2400018, 1, 1200, -331, 100);
    cm.spawnMobLimit(2400019, 1, 1400, -331, 100);
    cm.spawnMobLimit(2400019, 1, 1400, -331, 100);
    cm.spawnMobLimit(2400018, 1, 1600, -331, 100);
    cm.spawnMobLimit(2400018, 1, 1600, -331, 100);
    cm.spawnMobLimit(2400018, 1, 1850, -211, 100);
    cm.spawnMobLimit(2400018, 1, 1850, -211, 100);
    cm.spawnMobLimit(2400018, 1, 2050, -211, 100);
    cm.spawnMobLimit(2400018, 1, 2050, -211, 100);
    cm.spawnMobLimit(2400018, 1, 2250, -211, 100);
    cm.spawnMobLimit(2400018, 1, 2250, -211, 100);
    cm.spawnMobLimit(2400018, 1, 1300, -631, 100);
    cm.spawnMobLimit(2400018, 1, 1300, -631, 100);
    cm.spawnMobLimit(2400018, 1, 1450, -631, 100);
    cm.spawnMobLimit(2400018, 1, 1450, -631, 100);
    cm.spawnMobLimit(2400018, 1, 1600, -631, 100);
    cm.spawnMobLimit(2400018, 1, 1600, -631, 100);
    cm.spawnMobLimit(2400018, 1, 1750, -631, 100);
    cm.spawnMobLimit(2400018, 1, 1750, -631, 100);
    cm.spawnMobLimit(2400018, 1, 1900, -631, 100);
    cm.spawnMobLimit(2400018, 1, 1900, -631, 100);
    cm.spawnMobLimit(2400018, 1, 2050, -631, 100);
    cm.spawnMobLimit(2400018, 1, 2050, -631, 100);
    cm.spawnMobLimit(2400018, 1, 2200, -631, 100);
    cm.spawnMobLimit(2400018, 1, 2200, -631, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
    cm.spawnMobLimit(2400019, 1, 2500, 29, 100);
    cm.dispose();
  }
}