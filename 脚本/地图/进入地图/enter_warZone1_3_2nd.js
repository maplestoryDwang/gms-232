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
    cm.spawnMobLimit(2400122, 1, 1050, 221, 100);
    cm.spawnMobLimit(2400123, 1, 900, 259, 100);
    cm.spawnMobLimit(2400124, 1, 1200, 177, 100);
    cm.spawnMobLimit(2400122, 1, 1419, 177, 100);
    cm.spawnMobLimit(2400124, 1, 1191, -70, 100);
    cm.spawnMobLimit(2400122, 1, 1076, -70, 100);
    cm.spawnMobLimit(2400123, 1, 1130, -70, 100);
    cm.spawnMobLimit(2400124, 1, 1131, -387, 100);
    cm.spawnMobLimit(2400122, 1, 808, -387, 100);
    cm.spawnMobLimit(2400123, 1, 1296, -387, 100);
    cm.spawnMobLimit(2400124, 1, 1239, -387, 100);
    cm.spawnMobLimit(2400124, 1, -94, -229, 100);
    cm.spawnMobLimit(2400123, 1, -631, -229, 100);
    cm.spawnMobLimit(2400124, 1, -555, -229, 100);
    cm.spawnMobLimit(2400123, 1, -573, -229, 100);
    cm.dispose();
  }
}