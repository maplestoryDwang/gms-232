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
    cm.npc_ChangeController(3001915, "oid=434165", 18, 129, 3, -32, 68, 1, false, 0, false);
    cm.npc_ChangeController(3001854, "oid=434166", 319, 112, 0, 269, 369, 1, false, 0, false);
    cm.npc_ChangeController(3001855, "oid=434167", 250, 129, 3, 200, 300, 1, false, 0, false);
    cm.dispose();
  }
}