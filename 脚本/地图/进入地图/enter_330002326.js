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
    cm.npc_ChangeController(1530150, "oid=37322197", 745, 16, 6, 695, 795, 0, true, false);
    cm.npc_SetSpecialAction("oid=37322197", "summon", 0, 0);
    cm.npc_ChangeController(1530160, "oid=37322198", 795, 16, 6, 745, 845, 1, true, false);
    cm.npc_SetSpecialAction("oid=37322198", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=37322197", "jealousy", -1, 1);
    cm.npc_SetSpecialAction("oid=37322198", "jealousy", -1, 1);
    cm.openCamera(1, 0, [1530150, 1530160], [0], 0, -1, -1, 1);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;