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
    cm.npc_ChangeController(3004335, "oid=2809197", 262, 262, 1, 212, 312, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=2809197", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=2809197", 'special2', -1, 1);
    cm.dispose();
  }
}