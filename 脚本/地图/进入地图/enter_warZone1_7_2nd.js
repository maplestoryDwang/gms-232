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
    cm.spawnMobLimit(2400122, 1, -600, 259, 100);
    cm.spawnMobLimit(2400123, 1, -200, 93, 100);
    cm.spawnMobLimit(2400124, 1, 0, 93, 100);
    cm.spawnMobLimit(2400122, 1, 200, 93, 100);
    cm.spawnMobLimit(2400123, 1, 600, 259, 100);
    cm.spawnMobLimit(2400124, 1, 700, 259, 100);
    cm.spawnMobLimit(2400123, 1, -600, -229, 100);
    cm.spawnMobLimit(2400124, 1, -450, -229, 100);
    cm.spawnMobLimit(2400122, 1, -300, -229, 100);
    cm.spawnMobLimit(2400123, 1, -150, -229, 100);
    cm.spawnMobLimit(2400124, 1, 0, -229, 100);
    cm.spawnMobLimit(2400122, 1, 400, -343, 100);
    cm.spawnMobLimit(2400123, 1, 600, -343, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
    cm.dispose();
  }
}