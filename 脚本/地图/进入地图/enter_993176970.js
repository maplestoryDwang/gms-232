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
    cm.killAllMobNoExp();
    cm.spawnMobLimit(8642092, 1, 90, 62, 100);
    cm.npc_ChangeController(3004732, "oid=1862329", -140, 0, 37, -190, -90, 0, true, 0, false);
    cm.npc_SetSpecialAction("oid=1862329", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=1862329", 'angry3', -1, 1);
    cm.dispose();
  }
}