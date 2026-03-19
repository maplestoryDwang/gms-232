var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(E, J, L) {
  if (status == 0 && E == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = L;
  var n = -1;
  if (status <= n++) {
    cm.dispose();
  } else if (status === n++) {
    cm.updateInfoQuest(63508, "e=1");
    cm.updateInfoQuest(63485, "connecting=1");
    cm.onActionBarResult(5, 1008);
    cm.onSetMapTagedObjectVisible(1, "bton_s_b4c_00", 512);
    cm.Hidden_background("pt_s_b4c_00", 1, 0, 0, 0);
    cm.dynamicObjMoveSchedule(-324, -191, -324, -225, -324, -191, 1, 0, -12, "door_s_b4c_00", 700, 0);
    cm.dynamicObjMoveSchedule(-324, -225, -324, -191, -324, -225, 1, 0, 12, "door_s_b4c_00", 700, 350);
    cm.dynamicObjMoveSchedule(-4447, -754, -4447, -313, -4447, -754, 1, 0, 30, "crane_s_b4c_00", 27000, 0);
    cm.dynamicObjMoveSchedule(-4447, -313, -4447, -754, -4447, -313, 1, 0, -30, "crane_s_b4c_00", 27000, 13500);
    cm.getWeatherEffectNotice("立即移动至最后检测站，继续进行。", 230, 15000, 1);
    cm.onTeleport(0, 3, cm.getPlayer().getId(), -642, 93);
    cm.spawnMobLimit(9601337, 1, -2097, -136, 2);
    cm.spawnMobLimit(9601336, 1, -3181, 104, 2);
    cm.dispose();
  }
}