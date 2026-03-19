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
    if (cm.getMapId() == 400050400) {
      cm.setSessionValue("kill_count", '0');
      cm.spawnMobLimit(2400017, 1, 400, 29, 100);
      cm.spawnMobLimit(2400017, 1, 400, 29, 100);
      cm.spawnMobLimit(2400017, 1, 600, 29, 100);
      cm.spawnMobLimit(2400017, 1, 600, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1100, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1100, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1200, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1200, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1300, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1300, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1400, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1400, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1500, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1500, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1600, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1600, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1700, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1700, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1800, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1800, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1900, 29, 100);
      cm.spawnMobLimit(2400017, 1, 1900, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2000, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2000, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2100, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2100, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2200, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2200, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2300, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2300, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2400, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2500, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2047, 29, 100);
      cm.spawnMobLimit(2400017, 1, 2155, 29, 100);
      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}