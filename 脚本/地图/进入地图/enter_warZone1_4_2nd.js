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
    cm.spawnMobLimit(2400124, 1, -4500, 176, 100);
    cm.spawnMobLimit(2400125, 1, -4300, 176, 100);
    cm.spawnMobLimit(2400126, 1, -4100, 176, 100);
    cm.spawnMobLimit(2400124, 1, -3800, 92, 100);
    cm.spawnMobLimit(2400125, 1, -3600, 92, 100);
    cm.spawnMobLimit(2400126, 1, -3400, 92, 100);
    cm.spawnMobLimit(2400124, 1, -3000, 176, 100);
    cm.spawnMobLimit(2400125, 1, -4600, -163, 100);
    cm.spawnMobLimit(2400126, 1, -4400, -163, 100);
    cm.spawnMobLimit(2400124, 1, -4200, -163, 100);
    cm.spawnMobLimit(2400125, 1, -4000, -163, 100);
    cm.spawnMobLimit(2400126, 1, -3800, -163, 100);
    cm.spawnMobLimit(2400124, 1, -3300, -163, 100);
    cm.spawnMobLimit(2400125, 1, -3100, -163, 100);
    cm.spawnMobLimit(2400126, 1, -2900, -163, 100);
    cm.spawnMobLimit(2400126, 1, -4000, -385, 100);
    cm.spawnMobLimit(2400124, 1, -3800, -385, 100);
    cm.spawnMobLimit(2400125, 1, -3600, -385, 100);
    cm.spawnMobLimit(2400126, 1, -3400, -385, 100);
    cm.spawnMobLimit(2400126, 1, -3200, -385, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
    cm.dispose();
  }
}