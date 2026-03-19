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
    cm.spawnMobLimit(2400120, 1, -500, 182, 100);
    cm.spawnMobLimit(2400121, 1, -300, 182, 100);
    cm.spawnMobLimit(2400122, 1, -100, 182, 100);
    cm.spawnMobLimit(2400120, 1, 0, 182, 100);
    cm.spawnMobLimit(2400121, 1, 100, 182, 100);
    cm.spawnMobLimit(2400122, 1, 300, 182, 100);
    cm.spawnMobLimit(2400120, 1, 500, 182, 100);
    cm.spawnMobLimit(2400121, 1, 700, 182, 100);
    cm.spawnMobLimit(2400122, 1, 900, 182, 100);
    cm.spawnMobLimit(2400121, 1, -350, -118, 100);
    cm.spawnMobLimit(2400122, 1, -200, -118, 100);
    cm.spawnMobLimit(2400120, 1, -50, -118, 100);
    cm.spawnMobLimit(2400121, 1, 100, -478, 100);
    cm.spawnMobLimit(2400122, 1, 200, -478, 100);
    cm.spawnMobLimit(2400120, 1, 300, -478, 100);
    cm.spawnMobLimit(2400121, 1, 400, -478, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
    cm.dispose();
  }
}