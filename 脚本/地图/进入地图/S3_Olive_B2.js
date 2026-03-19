var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(p, c, L) {
  if (status == 0 && p == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = L;
  var m = -1;
  if (status <= m++) {
    cm.dispose();
  } else if (status === m++) {
    cm.updateInfoQuest(63510, "e=2");
    cm.updateInfoQuest(63485, "connecting=1");
    cm.onActionBarResult(5, 1008);
    cm.dynamicObjMoveSchedule(4568, -332, 5482, -332, 4568, -332, 1, 10, 0, "foot_s_b2c_00", 19000, 0);
    cm.dynamicObjMoveSchedule(5482, -332, 4568, -332, 5482, -332, 1, -10, 0, "foot_s_b2c_00", 19000, 9500);
    cm.getWeatherEffectNotice("立即移动至最后检测站，继续进行。", 230, 15000, 1);
    cm.onTeleport(0, 3, cm.getPlayer().getId(), 8446, 72);
    cm.spawnMobLimit(9601334, 1, 7380, 74, 11);
    cm.spawnMobLimit(9601334, 1, 6181, 74, 11);
    cm.spawnMobLimit(9601334, 1, 4460, 74, 11);
    cm.spawnMobLimit(9601334, 1, 2034, 74, 11);
    cm.spawnMobLimit(9601334, 1, 2020, 74, 11);
    cm.spawnMobLimit(9601334, 1, -44, 74, 11);
    cm.spawnMobLimit(9601334, 1, -1079, 74, 11);
    cm.spawnMobLimit(9601334, 1, -984, 74, 11);
    cm.spawnMobLimit(9601334, 1, -1615, 74, 11);
    cm.spawnMobLimit(9601334, 1, -1907, 74, 11);
    cm.dispose();
  }
}