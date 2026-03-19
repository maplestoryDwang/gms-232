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
    cm.npc_ChangeController(2159100, "oid=868411", 224, -26, 9, 174, 274, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=868411", "summon", 0, 0);
    cm.dispose();
  }
}