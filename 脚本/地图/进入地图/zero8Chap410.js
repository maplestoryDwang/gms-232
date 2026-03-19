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
    cm.npc_ChangeController(2480012, "oid=3611044", 476, 81, 11, 426, 526, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=3611044", 'summon', 0, 0);
    cm.npc_ChangeController(2480013, "oid=3611045", 360, -121, 22, 310, 410, 1, false, 0, false);
    cm.npc_SetSpecialAction("oid=3611045", "summon", 0, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;