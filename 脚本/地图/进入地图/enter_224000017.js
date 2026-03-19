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
    cm.npc_ChangeController(2074106, "oid=2588733", 550, 178, 8, 500, 600, 1, true, 500, false);
    cm.npc_SetSpecialAction("oid=2588733", "summon", 0, 0);
    cm.npc_ChangeController(2074109, "oid=2588734", 350, 178, 11, 300, 400, 0, false, 500, false);
    cm.npc_SetSpecialAction("oid=2588734", 'summon', 0, 0);
    cm.npc_ChangeController(2074100, "oid=2588735", 408, 183, 10, 358, 458, 0, true, 500, false);
    cm.npc_SetSpecialAction("oid=2588735", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=2588733", "dies", -1, 1);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;