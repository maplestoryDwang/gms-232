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
    cm.spawnMobLimit(2400120, 1, 2500, 188, 100);
    cm.spawnMobLimit(2400121, 1, 2600, 188, 100);
    cm.spawnMobLimit(2400122, 1, 2700, 188, 100);
    cm.spawnMobLimit(2400120, 1, 3000, 270, 100);
    cm.spawnMobLimit(2400121, 1, 3200, 270, 100);
    cm.spawnMobLimit(2400122, 1, 3400, 188, 100);
    cm.spawnMobLimit(2400120, 1, 3600, 188, 100);
    cm.spawnMobLimit(2400121, 1, 3800, 188, 100);
    cm.spawnMobLimit(2400121, 1, 2200, -149, 100);
    cm.spawnMobLimit(2400122, 1, 2400, -149, 100);
    cm.spawnMobLimit(2400120, 1, 2600, -149, 100);
    cm.spawnMobLimit(2400121, 1, 2800, -149, 100);
    cm.spawnMobLimit(2400122, 1, 3000, -149, 100);
    cm.spawnMobLimit(2400120, 1, 3200, -261, 100);
    cm.spawnMobLimit(2400121, 1, 3400, -261, 100);
    cm.spawnMobLimit(2400122, 1, 3600, -261, 100);
    cm.spawnMobLimit(2400120, 1, 3800, -261, 100);
    cm.spawnMobLimit(2400122, 1, 2600, -510, 100);
    cm.spawnMobLimit(2400120, 1, 2800, -510, 100);
    cm.spawnMobLimit(2400121, 1, 3000, -510, 100);
    cm.spawnMobLimit(2400122, 1, 3200, -510, 100);
    cm.spawnMobLimit(2400122, 1, 3400, -510, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
    cm.spawnMobLimit(2400120, 1, 3666, 188, 100);
    cm.spawnMobLimit(2400121, 1, 3631, 188, 100);
    cm.spawnMobLimit(2400120, 1, 4335, 188, 100);
    cm.spawnMobLimit(2400122, 1, 3980, 188, 100);
    cm.spawnMobLimit(2400120, 1, 3967, -261, 100);
    cm.spawnMobLimit(2400122, 1, 3874, -261, 100);
    cm.spawnMobLimit(2400121, 1, 3965, -261, 100);
    cm.spawnMobLimit(2400120, 1, 2374, 188, 100);
    cm.dispose();
  }
}