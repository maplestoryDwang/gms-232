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
  } else {
    if (status === V++) {
      if (cm.isQuestActive(40001)) {
        cm.playerMessage(-1, "按[Ctrl]攻击键消灭敌人。");
        cm.spawnMobLimit(9300744, 1, -448, -6, 100);
        cm.spawnMobLimit(9300744, 1, 234, -6, 100);
        cm.spawnMobLimit(9300744, 1, 525, -6, 100);
        cm.spawnMobLimit(9300744, 1, -646, -388, 100);
        cm.spawnMobLimit(9300744, 1, 310, -379, 100);
        cm.spawnMobLimit(9300744, 1, 848, -379, 100);
        cm.spawnMobLimit(9300744, 1, 1150, -298, 100);
        cm.spawnMobLimit(9300744, 1, 1678, -368, 100);
        cm.spawnMobLimit(9300744, 1, 1557, -368, 100);
      } else if (cm.isQuestActive(40002)) {
        cm.playerMessage(-1, "跟着地图上的方向键移动。");
      }
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;