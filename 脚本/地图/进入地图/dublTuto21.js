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
    cm.killAllMobNoExp();
    cm.spawnMobLimit(9300521, 1, -500, 152, 100);
    cm.spawnMobLimit(9300522, 1, -300, 152, 100);
    cm.spawnMobLimit(9300522, 1, -100, 152, 100);
    cm.spawnMobLimit(9300522, 1, 100, 152, 100);
    cm.spawnMobLimit(9300522, 1, 300, 152, 100);
    cm.effect_NormalSpeechBalloon("只有那个箱子的把手\r\n感觉有点不太一样呢……？", 1, 0, 1, 5000, 1, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
    cm.dispose();
  }
}