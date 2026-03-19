var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (!cm.isQuestActive(64025)) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.forceJoinEvent("莫奈德_地图_Act1.1_收集木材");
    cm.addPopupSay(0, 3000, "#b时间很赶……尽快收集吧。", '', 0);
    cm.playerMessage(-1, "狩猎圆木独眼触须怪，收集有用的木材。");
    cm.addPopupSay(9400583, 3000, '我们也跟你一起！', '', 0);
    cm.spawnMobLimit(9402304, 1, 100, 175, 1);
    cm.addPopupSay(9400596, 3000, "我们不能光让你一个人辛苦！", '', 0);
    cm.spawnMobLimit(9402313, 1, 200, 175, 1);
    cm.spawnMobLimit(9402313, 1, 300, 175, 1);
    cm.spawnMobLimit(9402314, 1, 400, 175, 1);
    cm.spawnMobLimit(9402314, 1, 397, 175, 1);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;