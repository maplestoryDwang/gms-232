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
    cm.npc_ChangeController(2550100, "oid=21873", 417, -1874, 9, 367, 467, 5, true, false);
    cm.npc_ChangeController(2550101, "oid=21874", 136, -1875, 40, 86, 186, 0, false, false);
    cm.npc_ChangeController(2550102, "oid=21875", 213, -1870, 42, 163, 237, 4, true, false);
    cm.npc_ChangeController(2500001, "oid=21876", 607, -1887, 11, 557, 652, 0, false, false);
    cm.Hidden_background("DLep4_fire", cm.isQuestFinished(32672) ? 1 : 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;