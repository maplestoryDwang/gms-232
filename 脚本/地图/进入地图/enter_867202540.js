var status = -1;
var selectionLog = [];
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
    cm.playerMessage(-1, "成为艾伊纳尔和凯恩的修炼对象，直到他们累垮。");
    cm.spawnMobLimit(9402334, 1, -150, -115, 1);
    cm.spawnMobLimit(9402335, 1, -650, -115, 1);
    cm.dispose();
    cm.forceJoinEvent("莫奈德_地图_Act3.10_战斗训练6");
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;