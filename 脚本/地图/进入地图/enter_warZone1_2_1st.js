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
    cm.spawnMobLimit(2400122, 1, -300, 152, 100);
    cm.spawnMobLimit(2400122, 1, -200, 152, 100);
    cm.spawnMobLimit(2400122, 1, -100, 152, 100);
    cm.spawnMobLimit(2400122, 1, 0, 152, 100);
    cm.spawnMobLimit(2400122, 1, 100, 152, 100);
    cm.spawnMobLimit(2400122, 1, 200, 152, 100);
    cm.spawnMobLimit(2400122, 1, 300, 152, 100);
    cm.spawnMobLimit(2400122, 1, 1000, 152, 100);
    cm.spawnMobLimit(2400122, 1, 1100, 152, 100);
    cm.spawnMobLimit(2400122, 1, 800, 92, 100);
    cm.spawnMobLimit(2400122, 1, -500, -208, 100);
    cm.spawnMobLimit(2400122, 1, -400, -208, 100);
    cm.spawnMobLimit(2400122, 1, -300, -208, 100);
    cm.spawnMobLimit(2400122, 1, -200, -208, 100);
    cm.spawnMobLimit(2400122, 1, -100, -208, 100);
    cm.spawnMobLimit(2400122, 1, 0, -208, 100);
    cm.spawnMobLimit(2400122, 1, 100, -208, 100);
    cm.spawnMobLimit(2400122, 1, 200, -208, 100);
    cm.spawnMobLimit(2400122, 1, 300, -208, 100);
    cm.spawnMobLimit(2400122, 1, 400, -208, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
    cm.dispose();
  }
}