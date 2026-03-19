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
    cm.npc_ChangeController(2470042, "oid=27620", 2372, 158, 71, 2322, 2422, 1, false, 0, false);
    cm.npc_ChangeController(2470044, "oid=27621", 2976, -86, 137, 2926, 3026, 1, false, 0, false);
    cm.npc_ChangeController(2470043, "oid=27622", 1608, 158, 65, 1558, 1658, 1, false, 0, false);
    cm.npc_ChangeController(2470041, "oid=27623", 4514, -274, 7, 4464, 4564, 1, false, 0, false);
    cm.npc_ChangeController(2470040, "oid=27624", 2546, -198, 130, 2520, 2596, 1, false, 0, false);
    cm.npc_ChangeController(2470039, "oid=27625", 2494, 158, 72, 2444, 2544, 1, false, 0, false);
    cm.forceStartQuest(40617, '0');
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;