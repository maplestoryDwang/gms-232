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
    cm.hideNpc(3001924);
    cm.npc_ChangeController(3001924, "oid=64263", -1117, -167, 5, -1135, -1085, 5, true, 0, true);
    cm.npc_ChangeController(3001924, 'oid=64264', -878, -167, 5, -878, -790, 5, true, 0, true);
    cm.npc_ChangeController(3001924, 'oid=64265', -675, -167, 1, -733, -633, 4, true, 0, true);
    cm.npc_ChangeController(3001924, "oid=64266", 57, -167, 3, 38, 138, 5, true, 0, true);
    cm.npc_ChangeController(3001924, "oid=64267", 394, -167, 6, 391, 456, 2, true, 0, true);
    cm.dispose();
  }
}