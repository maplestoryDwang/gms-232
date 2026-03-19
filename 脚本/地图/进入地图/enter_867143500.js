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
    cm.dynamicObjMoveSchedule(-83, -892, -83, 7, -83, -892, 1, 0, 30, "elev_e_b2_00", 56000, 0);
    cm.dynamicObjMoveSchedule(-44, -1023, -44, -120, -44, -1023, 1, 0, 30, "elevu_e_b2_00", 56000, 0);
    cm.dynamicObjMoveSchedule(-83, 7, -83, -892, -83, 7, 1, 0, -30, "elev_e_b2_00", 56000, 28000);
    cm.dynamicObjMoveSchedule(-44, -120, -44, -1023, -44, -120, 1, 0, -30, "elevu_e_b2_00", 56000, 28000);
    cm.dispose();
  }
}