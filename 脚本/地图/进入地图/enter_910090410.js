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
    cm.npc_ChangeController(1013440, "oid=210606", -456, -214, 2, -506, -406, 1, false, false);
    cm.npc_ChangeController(1013441, "oid=210607", -361, -214, 2, -411, -311, 1, false, false);
    cm.npc_ChangeController(1013442, "oid=210608", -280, -214, 2, -330, -230, 1, false, false);
    cm.spawnMobLimit(2300268, 1, -320, 16, 1);
    cm.scheduleWarpTask(600, 100051070, 1);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;