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
    cm.setSessionValue('kill_count', '0');
    cm.playerMessage(-1, "请消灭所有敌人。");
    cm.spawnMobLimit(9300542, 1, 1600, 149, 100);
    cm.spawnMobLimit(9300542, 1, 1600, 149, 100);
    cm.spawnMobLimit(9300542, 1, 1650, 149, 100);
    cm.spawnMobLimit(9300542, 1, 1650, 149, 100);
    cm.spawnMobLimit(9300542, 1, 1700, 149, 100);
    cm.spawnMobLimit(9300542, 1, 1700, 149, 100);
    cm.spawnMobLimit(9300542, 1, 1750, 149, 100);
    cm.spawnMobLimit(9300542, 1, 1750, 149, 100);
    cm.spawnMobLimit(9300543, 1, 1800, 149, 100);
    cm.spawnMobLimit(9300543, 1, 1800, 149, 100);
    cm.spawnMobLimit(9300543, 1, 1900, 149, 100);
    cm.spawnMobLimit(9300543, 1, 1900, 149, 100);
    cm.spawnMobLimit(9300543, 1, 1950, 149, 100);
    cm.spawnMobLimit(9300543, 1, 1950, 149, 100);
    cm.spawnMobLimit(9300543, 1, 2000, 149, 100);
    cm.spawnMobLimit(9300543, 1, 2000, 149, 100);
    cm.dispose();
  }
}