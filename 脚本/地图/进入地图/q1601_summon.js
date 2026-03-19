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
    cm.npc_ChangeController(9073000, "oid=249168", 364, 64, 1, 314, 414, 1, false, false);
    cm.npc_ChangeController(9073013, "oid=249169", -496, 64, 1, -546, -446, 1, false, false);
    if (cm.isQuestActive(1601)) {
      cm.forceForfeitQuest(1601);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;