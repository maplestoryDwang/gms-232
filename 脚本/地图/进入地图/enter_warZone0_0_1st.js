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
    cm.spawnMobLimit(2400015, 1, 100, 29, 100);
    cm.spawnMobLimit(2400015, 1, 100, 29, 100);
    cm.spawnMobLimit(2400015, 1, 200, 29, 100);
    cm.spawnMobLimit(2400015, 1, 200, 29, 100);
    cm.spawnMobLimit(2400015, 1, 300, 29, 100);
    cm.spawnMobLimit(2400015, 1, 300, 29, 100);
    cm.spawnMobLimit(2400015, 1, 400, 29, 100);
    cm.spawnMobLimit(2400015, 1, 400, 29, 100);
    cm.spawnMobLimit(2400015, 1, 500, 29, 100);
    cm.spawnMobLimit(2400015, 1, 500, 29, 100);
    cm.spawnMobLimit(2400015, 1, 600, 29, 100);
    cm.spawnMobLimit(2400015, 1, 600, 29, 100);
    cm.spawnMobLimit(2400015, 1, 700, 29, 100);
    cm.spawnMobLimit(2400015, 1, 700, 29, 100);
    cm.spawnMobLimit(2400015, 1, 800, 29, 100);
    cm.spawnMobLimit(2400015, 1, 800, 29, 100);
    cm.spawnMobLimit(2400015, 1, 900, 29, 100);
    cm.spawnMobLimit(2400015, 1, 900, 29, 100);
    cm.spawnMobLimit(2400015, 1, 1000, 29, 100);
    cm.spawnMobLimit(2400015, 1, 1000, 29, 100);
    cm.spawnMobLimit(2400015, 1, 1100, 29, 100);
    cm.spawnMobLimit(2400015, 1, 1100, 29, 100);
    cm.spawnMobLimit(2400015, 1, 1200, 29, 100);
    cm.spawnMobLimit(2400015, 1, 1200, 29, 100);
    cm.spawnMobLimit(2400015, 1, 1300, 29, 100);
    cm.spawnMobLimit(2400015, 1, 1300, 29, 100);
    cm.spawnMobLimit(2400015, 1, 1400, 29, 100);
    cm.spawnMobLimit(2400015, 1, 1400, 29, 100);
    cm.spawnMobLimit(2400015, 1, 1500, 29, 100);
    cm.spawnMobLimit(2400015, 1, 1500, 29, 100);
    cm.spawnMobLimit(2400015, 1, 1600, 29, 100);
    cm.spawnMobLimit(2400015, 1, 1600, 29, 100);
    cm.playerMessage(-1, "请消灭地图中所有的幽灵。");
    cm.dispose();
  }
}