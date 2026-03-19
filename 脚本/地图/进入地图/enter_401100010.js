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
    cm.npc_ChangeController(3001015, "oid=1077507", -426, 170, 1, -476, -376, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=1077507", "summon", 0, 0);
    cm.setSessionValue("idea401", "1077507");
    cm.dispose();
  }
}