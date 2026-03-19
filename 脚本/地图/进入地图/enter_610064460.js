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
    cm.npc_ChangeController(9201536, "oid=2758102", -1264, 212, 51, -1314, -1214, 1, true, 0, false);
    cm.npc_SetSpecialAction("oid=2758102", "summon", 0, 0);
    cm.dispose();
  }
}