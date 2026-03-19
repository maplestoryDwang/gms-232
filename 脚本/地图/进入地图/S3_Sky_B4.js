var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(D, H, l) {
  if (status == 0 && D == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = l;
  var A = -1;
  if (status <= A++) {
    cm.dispose();
  } else if (status === A++) {
    cm.updateInfoQuest(63508, 'd=1;e=2');
    cm.updateInfoQuest(63485, "connecting=1");
    cm.onActionBarResult(5, 1008);
    cm.onSetMapTagedObjectVisible(1, "bton_s_b4c_00", 512);
    cm.Hidden_background("pt_s_b4c_00", 1, 0, 0, 0);
    cm.dynamicObjMoveSchedule(-324, -191, -324, -225, -324, -191, 1, 0, -12, "door_s_b4c_00", 700, 0);
    cm.dynamicObjMoveSchedule(-324, -225, -324, -191, -324, -225, 1, 0, 12, "door_s_b4c_00", 700, 350);
    cm.dynamicObjMoveSchedule(-4447, -754, -4447, -313, -4447, -754, 1, 0, 30, "crane_s_b4c_00", 27000, 0);
    cm.dynamicObjMoveSchedule(-4447, -313, -4447, -754, -4447, -313, 1, 0, -30, "crane_s_b4c_00", 27000, 13500);
    cm.spawnMobLimit(9601337, 1, -2097, -136, 2);
    cm.spawnMobLimit(9601336, 1, -3181, 104, 2);
    cm.dispose();
  }
}