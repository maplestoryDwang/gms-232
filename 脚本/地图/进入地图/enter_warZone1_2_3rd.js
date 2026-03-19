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
    cm.spawnMobLimit(2400124, 1, -400, 152, 100);
    cm.spawnMobLimit(2400124, 1, -250, 152, 100);
    cm.spawnMobLimit(2400124, 1, -100, 152, 100);
    cm.spawnMobLimit(2400124, 1, 50, 152, 100);
    cm.spawnMobLimit(2400124, 1, 200, 152, 100);
    cm.spawnMobLimit(2400124, 1, 350, 152, 100);
    cm.spawnMobLimit(2400124, 1, 500, 152, 100);
    cm.spawnMobLimit(2400124, 1, 650, 152, 100);
    cm.spawnMobLimit(2400124, 1, 800, 152, 100);
    cm.spawnMobLimit(2400124, 1, 950, 152, 100);
    cm.spawnMobLimit(2400124, 1, 1100, 152, 100);
    cm.spawnMobLimit(2400124, 1, -100, -148, 100);
    cm.spawnMobLimit(2400124, 1, 100, -148, 100);
    cm.spawnMobLimit(2400124, 1, 300, -148, 100);
    cm.spawnMobLimit(2400124, 1, 500, -148, 100);
    cm.spawnMobLimit(2400124, 1, 700, -148, 100);
    cm.spawnMobLimit(2400124, 1, 900, -148, 100);
    cm.spawnMobLimit(2400124, 1, 100, -508, 100);
    cm.spawnMobLimit(2400124, 1, 300, -508, 100);
    cm.spawnMobLimit(2400124, 1, 500, -508, 100);
    cm.spawnMobLimit(2400124, 1, 700, -508, 100);
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
    cm.dispose();
  }
}