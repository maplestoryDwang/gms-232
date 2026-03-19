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
    cm.npc_ChangeController(2411024, "oid=2021603", -903, 165, 8, -953, -853, 0, false, 0, false);
    cm.npc_SetSpecialAction("oid=2021603", "summon", 0, 0);
    cm.onZeroInfo(2);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;