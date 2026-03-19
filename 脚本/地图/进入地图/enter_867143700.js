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
    cm.dynamicObjMoveSchedule(901, -878, 901, 23, 901, -878, 1, 0, 10, "elev_e_b3_00", 17000, 0);
    cm.dynamicObjMoveSchedule(901, 23, 901, -878, 901, 23, 1, 0, -10, "elev_e_b3_00", 17000, 8500);
    cm.dispose();
  }
}