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
    cm.npc_ChangeController(1102204, "oid=1133504", -1934, 66, 11, -1984, -1884, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=1133504", "summon", 0, 0);
    cm.dispose();
  }
}