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
    cm.npc_ChangeController(1530150, "oid=37319095", 916, 242, 35, 866, 966, 0, true, false);
    cm.npc_SetSpecialAction("oid=37319095", "summon", 0, 0);
    cm.npc_ChangeController(1530160, "oid=37319096", 966, 242, 35, 916, 1016, 1, true, false);
    cm.npc_SetSpecialAction("oid=37319096", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=37319095", "jealousy", -1, 1);
    cm.npc_SetSpecialAction("oid=37319096", "jealousy", -1, 1);
    cm.openCamera(1, 0, [1530150, 1530160], [0], 0, -1, -1, 1);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;