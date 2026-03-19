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
    cm.npc_ChangeController(9400200, "oid=23136147", 78, 145, 8, 28, 128, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=23136147", "summon", 0, 0);
    cm.spawnMobLimit(9402054, 1, -43, 245, 1);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;