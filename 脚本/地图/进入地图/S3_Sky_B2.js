var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(o, Z, f) {
  if (status == 0 && o == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = f;
  var x = -1;
  if (status <= x++) {
    cm.dispose();
  } else if (status === x++) {
    cm.updateInfoQuest(63510, "d=1;e=3");
    cm.updateInfoQuest(63485, "connecting=1");
    cm.onActionBarResult(5, 1008);
    cm.dynamicObjMoveSchedule(4568, -332, 5482, -332, 4568, -332, 1, 10, 0, "foot_s_b2c_00", 19000, 0);
    cm.dynamicObjMoveSchedule(5482, -332, 4568, -332, 5482, -332, 1, -10, 0, "foot_s_b2c_00", 19000, 9500);
    cm.getWeatherEffectNotice("立即移动至最后检测站，继续进行。", 230, 15000, 1);
    cm.onTeleport(0, 3, cm.getPlayer().getId(), 8446, 72);
    cm.spawnMobLimit(9601334, 1, 7380, 74, 10);
    cm.spawnMobLimit(9601334, 1, 6181, 74, 10);
    cm.spawnMobLimit(9601334, 1, 4460, 74, 10);
    cm.spawnMobLimit(9601334, 1, 2034, 74, 10);
    cm.spawnMobLimit(9601334, 1, 2020, 74, 10);
    cm.spawnMobLimit(9601334, 1, -44, 74, 10);
    cm.spawnMobLimit(9601334, 1, -1079, 74, 10);
    cm.spawnMobLimit(9601334, 1, -984, 74, 10);
    cm.spawnMobLimit(9601334, 1, -1615, 74, 10);
    cm.spawnMobLimit(9601334, 1, -1907, 74, 10);
    cm.dispose();
  }
}