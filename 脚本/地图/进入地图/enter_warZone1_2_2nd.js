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
    cm.spawnMobLimit(2400120, 1, -300, 152, 100);
    cm.spawnMobLimit(2400121, 1, -150, 152, 100);
    cm.spawnMobLimit(2400120, 1, 0, 152, 100);
    cm.spawnMobLimit(2400121, 1, 150, 152, 100);
    cm.spawnMobLimit(2400120, 1, 300, 152, 100);
    cm.spawnMobLimit(2400121, 1, 450, 152, 100);
    cm.spawnMobLimit(2400120, 1, 600, 152, 100);
    cm.spawnMobLimit(2400121, 1, 750, 152, 100);
    cm.spawnMobLimit(2400120, 1, 900, 152, 100);
    cm.spawnMobLimit(2400121, 1, 1050, 152, 100);
    cm.spawnMobLimit(2400120, 1, 1200, 152, 100);
    cm.spawnMobLimit(2400120, 1, -200, -208, 100);
    cm.spawnMobLimit(2400121, 1, -50, -208, 100);
    cm.spawnMobLimit(2400120, 1, 100, -208, 100);
    cm.spawnMobLimit(2400121, 1, 250, -208, 100);
    cm.spawnMobLimit(2400120, 1, 400, -208, 100);
    cm.spawnMobLimit(2400121, 1, 550, -208, 100);
    cm.spawnMobLimit(2400121, 1, 650, -88, 100);
    cm.spawnMobLimit(2400120, 1, 800, -88, 100);
    cm.spawnMobLimit(2400121, 1, 950, -88, 100);
    cm.spawnMobLimit(2400120, 1, 650, -388, 100);
    cm.spawnMobLimit(2400121, 1, 800, -388, 100);
    cm.spawnMobLimit(2400120, 1, 950, -388, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
    cm.dispose();
  }
}