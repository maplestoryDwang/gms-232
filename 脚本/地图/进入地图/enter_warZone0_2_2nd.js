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
    if (cm.getMapId() == 400050500) {
      cm.spawnMobLimit(2400017, 1, 300, -91, 100);
      cm.spawnMobLimit(2400017, 1, 300, -91, 100);
      cm.spawnMobLimit(2400017, 1, 450, -91, 100);
      cm.spawnMobLimit(2400017, 1, 450, -91, 100);
      cm.spawnMobLimit(2400017, 1, 1100, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1100, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1300, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1300, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1500, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1500, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1700, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1700, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1900, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1900, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2100, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2100, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2300, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2300, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2500, 29, 100);
      cm.spawnMobLimit(2400017, 1, 300, -331, 100);
      cm.spawnMobLimit(2400017, 1, 300, -331, 100);
      cm.spawnMobLimit(2400017, 1, 500, -331, 100);
      cm.spawnMobLimit(2400017, 1, 500, -331, 100);
      cm.spawnMobLimit(2400017, 1, 700, -31, 100);
      cm.spawnMobLimit(2400017, 1, 700, -31, 100);
      cm.spawnMobLimit(2400017, 1, 900, -296, 100);
      cm.spawnMobLimit(2400017, 1, 900, -296, 100);
      cm.spawnMobLimit(2400017, 1, 1200, -331, 100);
      cm.spawnMobLimit(2400017, 1, 1200, -331, 100);
      cm.spawnMobLimit(2400017, 1, 1400, -331, 100);
      cm.spawnMobLimit(2400017, 1, 1400, -331, 100);
      cm.spawnMobLimit(2400017, 1, 1600, -331, 100);
      cm.spawnMobLimit(2400017, 1, 1600, -331, 100);
      cm.spawnMobLimit(2400017, 1, 1800, -331, 100);
      cm.spawnMobLimit(2400017, 1, 1800, -331, 100);
      cm.spawnMobLimit(2400017, 1, 2531, 29, 100);
      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}