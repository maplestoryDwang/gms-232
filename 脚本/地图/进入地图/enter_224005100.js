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
    cm.npc_ChangeController(2074107, "oid=2588345", 300, 178, 11, 250, 350, 0, true, 500, false);
    cm.npc_SetSpecialAction("oid=2588345", "summon", 0, 0);
    cm.npc_ChangeController(2074100, "oid=2588346", 350, 178, 11, 300, 400, 0, true, 500, false);
    cm.npc_SetSpecialAction("oid=2588346", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=2588346", "pain3", -1, 1);
    cm.spawnMobLimit(5100200, 1, 730, 163, 1);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;