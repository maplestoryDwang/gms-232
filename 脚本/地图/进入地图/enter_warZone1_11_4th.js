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
    cm.spawnMobLimit(2400124, 1, -300, 182, 100);
    cm.spawnMobLimit(2400125, 1, -150, 182, 100);
    cm.spawnMobLimit(2400126, 1, 0, 182, 100);
    cm.spawnMobLimit(2400124, 1, 150, 182, 100);
    cm.spawnMobLimit(2400125, 1, 300, 182, 100);
    cm.spawnMobLimit(2400126, 1, 450, 182, 100);
    cm.spawnMobLimit(2400124, 1, 600, 182, 100);
    cm.spawnMobLimit(2400125, 1, 750, 182, 100);
    cm.spawnMobLimit(2400126, 1, -200, -58, 100);
    cm.spawnMobLimit(2400124, 1, -100, -58, 100);
    cm.spawnMobLimit(2400125, 1, 0, -58, 100);
    cm.spawnMobLimit(2400126, 1, 100, -58, 100);
    cm.spawnMobLimit(2400124, 1, 200, -58, 100);
    cm.spawnMobLimit(2400125, 1, 300, -58, 100);
    cm.spawnMobLimit(2400126, 1, 400, -58, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
    cm.dispose();
  }
}