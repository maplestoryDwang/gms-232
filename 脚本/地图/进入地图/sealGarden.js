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
    cm.npc_ChangeController(1204010, "oid=7591576", 790, 75, 51, 740, 840, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=7591576", "summon", 0, 0);
    cm.dispose();
  }
}