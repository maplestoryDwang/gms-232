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
    cm.spawnMobLimit(2400123, 1, -500, 182, 100);
    cm.spawnMobLimit(2400123, 1, -400, 182, 100);
    cm.spawnMobLimit(2400123, 1, -300, 182, 100);
    cm.spawnMobLimit(2400123, 1, -200, 182, 100);
    cm.spawnMobLimit(2400123, 1, -100, 182, 100);
    cm.spawnMobLimit(2400123, 1, 0, 182, 100);
    cm.spawnMobLimit(2400123, 1, 100, 182, 100);
    cm.spawnMobLimit(2400123, 1, 200, 182, 100);
    cm.spawnMobLimit(2400123, 1, 300, 182, 100);
    cm.spawnMobLimit(2400123, 1, 400, 182, 100);
    cm.spawnMobLimit(2400123, 1, 500, 182, 100);
    cm.spawnMobLimit(2400123, 1, 600, 182, 100);
    cm.spawnMobLimit(2400123, 1, 700, 182, 100);
    cm.spawnMobLimit(2400123, 1, 800, 182, 100);
    cm.spawnMobLimit(2400123, 1, 900, 182, 100);
    cm.spawnMobLimit(2400123, 1, 1000, 182, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
    cm.spawnMobLimit(2400123, 1, 835, 182, 100);
    cm.spawnMobLimit(2400123, 1, 781, 182, 100);
    cm.spawnMobLimit(2400123, 1, 818, 182, 100);
    cm.spawnMobLimit(2400123, 1, 829, 182, 100);
    cm.spawnMobLimit(2400123, 1, 787, 182, 100);
    cm.spawnMobLimit(2400123, 1, 1059, 182, 100);
    cm.spawnMobLimit(2400123, 1, 1138, 182, 100);
    cm.spawnMobLimit(2400123, 1, 1194, 182, 100);
    cm.dispose();
  }
}