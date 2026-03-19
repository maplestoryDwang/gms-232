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
    cm.spawnMobLimit(2400120, 1, -1400, 182, 100);
    cm.spawnMobLimit(2400121, 1, -1200, 182, 100);
    cm.spawnMobLimit(2400120, 1, -1000, 182, 100);
    cm.spawnMobLimit(2400121, 1, -800, 182, 100);
    cm.spawnMobLimit(2400122, 1, -600, 182, 100);
    cm.spawnMobLimit(2400120, 1, -400, 182, 100);
    cm.spawnMobLimit(2400121, 1, -200, 182, 100);
    cm.spawnMobLimit(2400122, 1, 0, 182, 100);
    cm.spawnMobLimit(2400122, 1, 200, 182, 100);
    cm.spawnMobLimit(2400120, 1, 400, 182, 100);
    cm.spawnMobLimit(2400121, 1, 600, 182, 100);
    cm.spawnMobLimit(2400120, 1, 800, 182, 100);
    cm.spawnMobLimit(2400121, 1, 1000, 182, 100);
    cm.spawnMobLimit(2400122, 1, 1200, 182, 100);
    cm.spawnMobLimit(2400122, 1, -400, 93, 100);
    cm.spawnMobLimit(2400120, 1, -200, 93, 100);
    cm.spawnMobLimit(2400121, 1, 0, 93, 100);
    cm.spawnMobLimit(2400122, 1, 200, 93, 100);
    cm.playerMessage(-1, "请将反攻总部里出现的幽灵全部消灭。");
    cm.dispose();
  }
}