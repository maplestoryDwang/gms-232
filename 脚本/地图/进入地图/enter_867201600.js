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
    cm.npc_ChangeController(9400580, "oid=202970", 809, 417, 58, 759, 859, 4, true, false);
    cm.npc_ChangeController(9400595, "oid=202971", 658, 424, 54, 608, 708, 4, true, false);
    cm.npc_ChangeController(9400571, "oid=202972", 1171, 225, 50, 1121, 1221, 1, false, false);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;