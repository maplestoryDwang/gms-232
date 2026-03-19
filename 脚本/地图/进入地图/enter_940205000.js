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
    cm.npc_ChangeController(3001511, "oid=143808391", -1266, -135, 65, -1316, -1216, 0, true, 300, false);
    cm.npc_SetSpecialAction("oid=143808391", "summon", 0, 0);
    cm.dispose();
  }
}